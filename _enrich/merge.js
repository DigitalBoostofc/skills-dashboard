// Merges _enrich/batch-*.json into ../agents-data.js by adding `detail:` to matching agent entries.
// Run: node _enrich/merge.js
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA_FILE = path.join(ROOT, 'agents-data.js');
const BATCH_DIR = __dirname;

// 1. Gather all detail maps
const detailById = {};
for (const f of fs.readdirSync(BATCH_DIR)) {
  if (!f.startsWith('batch-') || !f.endsWith('.json')) continue;
  const j = JSON.parse(fs.readFileSync(path.join(BATCH_DIR, f), 'utf8'));
  Object.assign(detailById, j);
}
console.log(`Loaded ${Object.keys(detailById).length} agent details from _enrich/*.json`);

// 2. Read agents-data.js
let src = fs.readFileSync(DATA_FILE, 'utf8');

// 3. For each entry { id:'xxx', ... } without `detail:`, inject one closing brace before `}`.
// Strategy: find every `{ id:'XYZ', ...... }` block on one or more lines; if the id is in
// detailById and block doesn't already have `detail:`, replace the closing `}` (of the entry
// itself, not any inner objects) with `,\n    detail: {...}\n  }`.
// To keep parsing simple we rely on the file's convention: each agent entry begins with
// `  { id:'...'` and ends with `` },`` or ` }]` on its own line or at the end of a line.

let injected = 0;
let skipped = 0;

// Process entries one at a time using a regex to find `{ id:'xxx',`
const entryStart = /\{\s*id\s*:\s*['"]([^'"]+)['"]/g;
const positions = [];
let m;
while ((m = entryStart.exec(src)) !== null) {
  positions.push({ start: m.index, id: m[1] });
}

// Walk entries from end to start to keep positions valid after edits
for (let i = positions.length - 1; i >= 0; i--) {
  const { start, id } = positions[i];
  const detail = detailById[id];
  if (!detail) continue;

  // Find matching closing brace for this object, tracking depth
  let depth = 0;
  let end = -1;
  let hasDetailAlready = false;
  // Look for `detail:` within the object scope (naive string check)
  for (let j = start; j < src.length; j++) {
    const ch = src[j];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) { end = j; break; }
    }
  }
  if (end === -1) continue;
  const block = src.slice(start, end + 1);
  if (/\bdetail\s*:/.test(block)) { skipped++; continue; }

  // Format detail as JS object literal (JSON is valid JS here)
  const detailStr = JSON.stringify(detail, null, 6).replace(/\n/g, '\n    ');
  const insert = `,\n    detail: ${detailStr}\n  `;

  src = src.slice(0, end) + insert + src.slice(end);
  injected++;
}

console.log(`Injected detail into ${injected} entries. Skipped ${skipped} entries that already had detail.`);
fs.writeFileSync(DATA_FILE, src);
console.log(`Wrote ${DATA_FILE}`);
