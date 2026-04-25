/* ================================================================
   STRATEGIES DATA — playbooks multi-squad
   ================================================================ */

const CATEGORIES_META = {
  launch:     { name: 'Lançamentos',      icon: '🚀', color: '#fb923c' },
  growth:     { name: 'Crescimento',      icon: '📈', color: '#34d399' },
  brand:      { name: 'Marca',            icon: '🎨', color: '#f472b6' },
  sales:      { name: 'Vendas',           icon: '💰', color: '#fbbf24' },
  ops:        { name: 'Operação',         icon: '⚙️', color: '#a78bfa' },
  strategy:   { name: 'Estratégia',       icon: '♟️', color: '#7cd3ff' },
  diagnostic: { name: 'Diagnóstico',      icon: '🔍', color: '#f87171' },
};
const CATEGORIES_ORDER = ['launch','growth','sales','brand','strategy','ops','diagnostic'];

const STRATEGIES_DB = [

  /* ─────────────────────────────────────────────────────────────
     1. LANÇAMENTO DE PRODUTO DIGITAL
     ───────────────────────────────────────────────────────────── */
  {
    id: 'launch-digital-product',
    title: 'Lançamento de Produto Digital',
    icon: '🚀',
    category: 'launch',
    tagline: 'Da validação da ideia até o primeiro lançamento lucrativo',
    description: 'Use quando você tem ideia de curso/infoproduto/SaaS e precisa validar, construir oferta, escrever copy, montar funil e rodar tráfego para o primeiro lançamento pago.',
    difficulty: 'medium',
    timeEstimate: '4-8 semanas',
    outcome: 'Primeiro lançamento lucrativo com unit economics validados',
    phases: [
      {
        name: 'Validação estratégica',
        description: 'Confirmar que vale a pena antes de construir',
        steps: [
          { agent: 'ab-sivers',    command: '*decide',       purpose: 'Aplicar Hell Yeah or No na ideia' },
          { agent: 'data-sean',    command: '*pmf',          purpose: 'Validar product-market fit' },
          { agent: 'hz-launch',    command: '*mvo',          purpose: 'Definir a Minimum Viable Offer' },
        ]
      },
      {
        name: 'Oferta & Pricing',
        description: 'Transformar a ideia em oferta irresistível',
        steps: [
          { agent: 'hz-offers',    command: '*grand-slam',   purpose: 'Construir Grand Slam Offer completa' },
          { agent: 'hz-pricing',   command: '*premium',      purpose: 'Posicionar preço premium por valor' },
          { agent: 'cm-hormozi-c', command: '*value-equation', purpose: 'Calcular e validar Equação de Valor' },
        ]
      },
      {
        name: 'Copy & Funil',
        description: 'Materializar a oferta em assets de venda',
        steps: [
          { agent: 'cm-cyrus',     command: '*brief',        purpose: 'Briefing de copy e atribuição de especialistas' },
          { agent: 'cm-evaldo',    command: '*one-belief',   purpose: 'Definir a One Belief da sales letter' },
          { agent: 'cm-brunson',   command: '*funnel',       purpose: 'Projetar funil com Value Ladder' },
          { agent: 'cm-brunson',   command: '*webinar',      purpose: 'Script Perfect Webinar para evento ao vivo' },
        ]
      },
      {
        name: 'Tráfego & Análise',
        description: 'Colocar leads no topo do funil e medir tudo',
        steps: [
          { agent: 'tr-chief',     command: '*diagnose',     purpose: 'Diagnosticar qual canal ativar primeiro' },
          { agent: 'tr-pedro',     command: '*campanha',     purpose: 'Estrutura de Meta Ads (BR/LATAM)' },
          { agent: 'tr-pixel',     command: '*setup',        purpose: 'Setup de rastreamento antes do lançamento' },
          { agent: 'tr-perf',      command: '*dashboard',    purpose: 'Dashboard de performance para decisões' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     2. REBRANDING COMPLETO
     ───────────────────────────────────────────────────────────── */
  {
    id: 'rebrand-full',
    title: 'Rebranding Completo',
    icon: '🎨',
    category: 'brand',
    tagline: 'Redefinir marca do zero — estratégia, identidade e implementação',
    description: 'Use quando a marca perdeu relevância, fundiu com outra, muda de público ou o posicionamento atual trava crescimento. Trabalho profundo — não é só logo novo.',
    difficulty: 'hard',
    timeEstimate: '8-12 semanas',
    outcome: 'Marca reposicionada com identidade coerente em todos os touchpoints',
    phases: [
      {
        name: 'Diagnóstico',
        description: 'Entender por que a marca atual não funciona',
        steps: [
          { agent: 'brand-chief',   command: '*diagnose',    purpose: 'Triagem inicial e roteamento' },
          { agent: 'brand-chief',   command: '*audit',       purpose: 'Auditoria completa com múltiplas perspectivas' },
          { agent: 'brand-byron',   command: '*availability',purpose: 'Auditoria de disponibilidade mental e física' },
        ]
      },
      {
        name: 'Reposicionamento estratégico',
        description: 'Definir o novo posicionamento e a visão',
        steps: [
          { agent: 'brand-al',      command: '*position',    purpose: 'Possuir uma palavra na mente do prospect' },
          { agent: 'brand-aaker',   command: '*identity',    purpose: 'Construir identidade pelo Brand Vision Model' },
          { agent: 'brand-kapferer',command: '*prism',       purpose: 'Definir as 6 facetas e o kernel' },
          { agent: 'brand-marty',   command: '*onlyness',    purpose: 'Articular a Declaração de Onlyness' },
        ]
      },
      {
        name: 'Naming & identidade visual',
        description: 'Materializar o novo posicionamento',
        steps: [
          { agent: 'brand-naming',  command: '*generate',    purpose: 'Gerar candidatos a novo nome' },
          { agent: 'brand-domain',  command: '*batch-check', purpose: 'Verificar viabilidade digital dos nomes' },
          { agent: 'brand-alina',   command: '*process',     purpose: 'Processo de 5 fases de identidade' },
          { agent: 'brand-arch',    command: '*discover',    purpose: 'Descobrir arquétipos primário e secundário' },
        ]
      },
      {
        name: 'Implementação',
        description: 'Operacionalizar a nova marca em todos os pontos',
        steps: [
          { agent: 'brand-denise',  command: '*operationalize', purpose: 'Alinhar cultura interna com a nova marca' },
          { agent: 'ds-chief',      command: '*system',      purpose: 'Coordenar design system com o novo visual' },
          { agent: 'brand-alina',   command: '*touchpoints', purpose: 'Mapear e desenhar todos os touchpoints' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     3. AUDITORIA 360° DE NEGÓCIO
     ───────────────────────────────────────────────────────────── */
  {
    id: 'business-audit-360',
    title: 'Auditoria 360° de Negócio',
    icon: '🔍',
    category: 'diagnostic',
    tagline: 'Diagnóstico profundo antes de prescrever qualquer solução',
    description: 'Use quando o negócio está em platô, a receita caiu sem causa clara, ou antes de uma decisão estratégica grande (captar, vender, pivotar). Evita prescrição sem diagnóstico.',
    difficulty: 'medium',
    timeEstimate: '2-4 semanas',
    outcome: 'Mapa claro das restrições, causa-raiz dos problemas e roadmap priorizado',
    phases: [
      {
        name: 'Diagnóstico financeiro & operacional',
        description: 'Onde o dinheiro e o tempo estão indo',
        steps: [
          { agent: 'hz-audit',      command: '*full-audit',    purpose: 'Auditoria 6M (Homem, Máquina, Material, Método, Medição, Natureza)' },
          { agent: 'hz-audit',      command: '*bottleneck',    purpose: 'Identificar a restrição primária' },
          { agent: 'cl-coo',        command: '*diagnose',      purpose: 'Health check operacional de 6 dimensões' },
        ]
      },
      {
        name: 'Análise de aquisição',
        description: 'Como os leads entram e convertem',
        steps: [
          { agent: 'tr-analyst',    command: '*full-audit',    purpose: 'Auditoria completa das contas de ads' },
          { agent: 'data-avinash',  command: '*see',           purpose: 'Análise See-Think-Do-Care do funil' },
          { agent: 'hz-leads',      command: '*core-4',        purpose: 'Diagnosticar o Core 4 de geração de leads' },
        ]
      },
      {
        name: 'Análise de retenção & LTV',
        description: 'O que acontece depois da venda',
        steps: [
          { agent: 'data-nick',     command: '*churn',         purpose: 'Prever e diagnosticar churn' },
          { agent: 'data-peter',    command: '*ltv',           purpose: 'Calcular LTV e unit economics' },
          { agent: 'hz-retention',  command: '*churn-audit',   purpose: 'Por que clientes estão saindo' },
        ]
      },
      {
        name: 'Síntese & plano',
        description: 'Traduzir o diagnóstico em ação',
        steps: [
          { agent: 'hz-advisor',    command: '*focus',         purpose: 'Cortar ruído — qual é A única coisa' },
          { agent: 'hz-audit',      command: '*improvement',   purpose: 'Roadmap 30/60/90 priorizado' },
          { agent: 'ab-dalio',      command: '*principles',    purpose: 'Codificar princípios de decisão pós-diagnóstico' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     4. CAMPANHA DE TRÁFEGO PAGO
     ───────────────────────────────────────────────────────────── */
  {
    id: 'paid-traffic-campaign',
    title: 'Campanha de Tráfego Pago (Meta + Google)',
    icon: '📣',
    category: 'growth',
    tagline: 'Estrutura, execução e escala de campanhas pagas lucrativas',
    description: 'Use quando precisa lançar ou reestruturar operação de mídia paga. Cobre Meta e Google, validação de oferta, tracking, criativos, escala e gestão financeira.',
    difficulty: 'medium',
    timeEstimate: '3-6 semanas',
    outcome: 'Operação de tráfego rodando com ROAS previsível e escalável',
    phases: [
      {
        name: 'Pré-requisitos',
        description: 'Validar que a oferta funciona antes de escalar',
        steps: [
          { agent: 'tr-chief',      command: '*diagnose',     purpose: 'Triagem — o que precisa ser ajustado primeiro' },
          { agent: 'hz-ads',        command: '*ad-audit',     purpose: 'Auditar se a oferta está pronta para escala' },
          { agent: 'tr-fiscal',     command: '*roas-target',  purpose: 'Definir metas de ROAS e payback' },
          { agent: 'tr-pixel',      command: '*setup',        purpose: 'Setup de pixels + Conversions API + server-side' },
        ]
      },
      {
        name: 'Estratégia por plataforma',
        description: 'Escolher o especialista certo para o mercado',
        steps: [
          { agent: 'tr-pedro',      command: '*campanha',     purpose: 'Meta Ads para BR/LATAM — 3 tipos de campanha' },
          { agent: 'tr-depesh',     command: '*bpm',          purpose: 'BPM Method para escalar Meta em USD' },
          { agent: 'tr-kasim',      command: '*google-setup', purpose: 'Google Ads — 4 tipos + Performance Max' },
          { agent: 'tr-tom',        command: '*aducate',      purpose: 'YouTube Ads — script ADUCATE' },
        ]
      },
      {
        name: 'Criativos & execução',
        description: 'O criativo é o novo targeting',
        steps: [
          { agent: 'tr-midas',      command: '*concept',      purpose: 'Desenvolver conceitos criativos testáveis' },
          { agent: 'tr-midas',      command: '*hooks',        purpose: 'Gerar 10 hooks por ângulo' },
          { agent: 'tr-buyer',      command: '*setup',        purpose: 'Setup operacional multi-plataforma' },
          { agent: 'tr-creative',   command: '*patterns',     purpose: 'Identificar padrões vencedores nos criativos' },
        ]
      },
      {
        name: 'Análise & escala',
        description: 'Dobrar nos vencedores, cortar perdedores',
        steps: [
          { agent: 'tr-perf',       command: '*dashboard',    purpose: 'Dashboard de performance e alertas' },
          { agent: 'tr-analyst',    command: '*waste',        purpose: 'Encontrar desperdício de spend' },
          { agent: 'tr-scale',      command: '*scale-plan',   purpose: 'Plano de escala sem explodir CPA' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     5. CONSTRUÇÃO DE MOVIMENTO / COMUNIDADE
     ───────────────────────────────────────────────────────────── */
  {
    id: 'movement-building',
    title: 'Construção de Movimento',
    icon: '✊',
    category: 'brand',
    tagline: 'De tensão compartilhada a comunidade com identidade própria',
    description: 'Use quando quer construir um movimento, causa ou comunidade ao redor de uma ideia. Vai muito além de marketing — exige fenomenologia, identidade, manifesto e arquitetura social.',
    difficulty: 'hard',
    timeEstimate: '12+ semanas',
    outcome: 'Comunidade com identidade clara, manifesto próprio e engine de crescimento orgânico',
    phases: [
      {
        name: 'Fundação fenomenológica',
        description: 'Escavar a tensão real que move pessoas',
        steps: [
          { agent: 'mv-chief',      command: '*assess',       purpose: 'Avaliar oportunidade de movimento' },
          { agent: 'mv-fen',        command: '*tension',      purpose: 'Mapear tensões sentidas em comunidade' },
          { agent: 'mv-fen',        command: '*resonate',     purpose: 'Testar ressonância da tensão identificada' },
        ]
      },
      {
        name: 'Identidade & narrativa',
        description: 'Cristalizar quem pertence e por quê',
        steps: [
          { agent: 'mv-id',         command: '*stack',        purpose: 'Construir stack de identidade de 5 camadas' },
          { agent: 'mv-id',         command: '*symbol',       purpose: 'Criar símbolos que cristalizam crença' },
          { agent: 'mv-man',        command: '*manifest',     purpose: 'Escrever o manifesto fundador' },
          { agent: 'ab-sinek',      command: '*why',          purpose: 'Articular o Por Quê profundo' },
        ]
      },
      {
        name: 'Arquitetura social',
        description: 'Estrutura que sustenta crescimento sem quebrar',
        steps: [
          { agent: 'mv-arch',       command: '*design',       purpose: 'Desenhar arquitetura completa da comunidade' },
          { agent: 'mv-arch',       command: '*ladder',       purpose: 'Escada de engajamento com gatilhos' },
          { agent: 'mv-arch',       command: '*ritual',       purpose: 'Rituais de pertencimento' },
          { agent: 'st-ganz',       command: '*narrative',    purpose: 'Narrativa Pública (Self-Us-Now)' },
        ]
      },
      {
        name: 'Crescimento & impacto',
        description: 'Escalar sem perder a essência',
        steps: [
          { agent: 'mv-ciclo',      command: '*flywheel',     purpose: 'Motor de crescimento em ondas' },
          { agent: 'mv-impacto',    command: '*pyramid',      purpose: 'Pirâmide de impacto — mudança real, não vaidade' },
          { agent: 'data-spinks',   command: '*spaces',       purpose: 'Modelo SPACES de comunidade' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     6. ESCALA DE E-COMMERCE
     ───────────────────────────────────────────────────────────── */
  {
    id: 'ecom-scale',
    title: 'Escala de E-commerce',
    icon: '🛒',
    category: 'growth',
    tagline: 'Da loja estável à operação de 7-8 dígitos',
    description: 'Use quando o e-commerce já tem tração e precisa escalar com eficiência — não só aumentar budget. Foca em retenção, LTV, escala de Meta e operação.',
    difficulty: 'medium',
    timeEstimate: '6-12 semanas',
    outcome: 'Operação escalada com LTV:CAC > 3:1 e fluxo de caixa sob controle',
    phases: [
      {
        name: 'Diagnóstico de unit economics',
        description: 'Saber se pode escalar antes de escalar',
        steps: [
          { agent: 'hz-models',     command: '*unit-economics', purpose: 'Calcular e otimizar economia unitária' },
          { agent: 'data-peter',    command: '*ltv',           purpose: 'Modelar LTV por cohort' },
          { agent: 'tr-fiscal',     command: '*profitability', purpose: 'Lucratividade real com ROAS net' },
        ]
      },
      {
        name: 'Retenção & LTV',
        description: 'A verdadeira alavanca de escala',
        steps: [
          { agent: 'hz-retention',  command: '*onboarding',   purpose: 'Onboarding de 30 dias que define a retenção' },
          { agent: 'data-nick',     command: '*health',       purpose: 'Score de saúde preditivo' },
          { agent: 'hz-retention',  command: '*ascension',    purpose: 'Escada de ascensão para clientes' },
        ]
      },
      {
        name: 'Escala de aquisição',
        description: 'Meta Ads em alta performance',
        steps: [
          { agent: 'tr-molly',      command: '*grid',         purpose: 'Ad Grid (avatars × hooks)' },
          { agent: 'tr-depesh',     command: '*bpm',          purpose: 'BPM Method + Graduation Testing' },
          { agent: 'tr-ralph',      command: '*five-levels',  purpose: 'Estrutura de 5 níveis + 70% cold traffic' },
          { agent: 'tr-scale',      command: '*scale-plan',   purpose: 'Plano de escala com CPA marginal' },
        ]
      },
      {
        name: 'Operação & sistemas',
        description: 'Sustentar a escala sem quebrar',
        steps: [
          { agent: 'hz-scale',      command: '*systems',      purpose: 'Construir SOPs de funções críticas' },
          { agent: 'cl-coo',        command: '*structure',    purpose: 'Estrutura organizacional para o próximo nível' },
          { agent: 'tr-pixel',      command: '*capi',         purpose: 'Conversions API para tracking à prova de iOS' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     7. PITCH PARA INVESTIDORES
     ───────────────────────────────────────────────────────────── */
  {
    id: 'investor-pitch',
    title: 'Pitch para Investidores',
    icon: '🎯',
    category: 'strategy',
    tagline: 'Narrativa, frame control e posicionamento para captar',
    description: 'Use quando vai apresentar para investidores (seed, series A, M&A). Combina storytelling, controle de frame e posicionamento contrarian.',
    difficulty: 'hard',
    timeEstimate: '3-6 semanas',
    outcome: 'Pitch deck + narrativa + rodada com múltiplos termsheets',
    phases: [
      {
        name: 'Posicionamento estratégico',
        description: 'Definir a tese antes do deck',
        steps: [
          { agent: 'ab-thiel',      command: '*secrets',      purpose: 'Identificar o segredo competitivo' },
          { agent: 'ab-reid',       command: '*blitz',        purpose: 'Avaliar potencial de blitzscaling' },
          { agent: 'cl-vision',     command: '*fundraise',    purpose: 'Avaliar prontidão de fundraising' },
        ]
      },
      {
        name: 'Narrativa do deck',
        description: 'Contar a história que grava',
        steps: [
          { agent: 'st-klaff',      command: '*pitch',        purpose: 'Estruturar pelo método STRONG' },
          { agent: 'st-klaff',      command: '*frame',        purpose: 'Estratégia de frame control' },
          { agent: 'st-duarte',     command: '*sparkline',    purpose: 'Estrutura Sparkline para apresentação' },
          { agent: 'st-duarte',     command: '*star',         purpose: 'Projetar o S.T.A.R. moment' },
        ]
      },
      {
        name: 'Mensagem & copy',
        description: 'Palavras precisas no slide e no elevator pitch',
        steps: [
          { agent: 'brand-miller',  command: '*one-liner',    purpose: 'One-liner StoryBrand memorável' },
          { agent: 'cm-klaff',      command: '*hookpoint',    purpose: 'Projetar o momento hookpoint' },
          { agent: 'cl-vision',     command: '*board',        purpose: 'Preparar apresentação para board' },
        ]
      },
      {
        name: 'Negociação & fechamento',
        description: 'Da apresentação ao termsheet',
        steps: [
          { agent: 'cm-voss',       command: '*accusation-audit', purpose: 'Antecipar e desarmar objeções' },
          { agent: 'cm-voss',       command: '*calibrate',    purpose: 'Perguntas calibradas para negociação' },
          { agent: 'ab-munger',     command: '*invert',       purpose: 'Pensar ao contrário sobre o deal' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     8. INFOPRODUTO HIGH-TICKET
     ───────────────────────────────────────────────────────────── */
  {
    id: 'high-ticket-infoproduct',
    title: 'Infoproduto High-Ticket',
    icon: '💎',
    category: 'sales',
    tagline: 'De especialista a criador de programa de R$ 5-50k por aluno',
    description: 'Use quando quer empacotar sua expertise em um programa premium (coaching, consultoria, cohort, mentoria) com ticket alto e funil de venda assistida.',
    difficulty: 'medium',
    timeEstimate: '6-10 semanas',
    outcome: 'Programa validado com primeira turma lotada e depoimentos',
    phases: [
      {
        name: 'Oferta & promessa',
        description: 'A transformação precisa ser inegociável',
        steps: [
          { agent: 'hz-offers',     command: '*grand-slam',   purpose: 'Grand Slam Offer para high-ticket' },
          { agent: 'hz-pricing',    command: '*premium',      purpose: 'Posicionamento premium' },
          { agent: 'cm-parris',     command: '*fascinations', purpose: 'Fascinations (700 bullets, 100 melhores)' },
          { agent: 'data-wes',      command: '*cohort',       purpose: 'Desenhar programa em formato cohort' },
        ]
      },
      {
        name: 'Copy & prova',
        description: 'Provar antes de pedir',
        steps: [
          { agent: 'cm-ry',         command: '*ctc',          purpose: 'Coaching the Conversion para lançamento' },
          { agent: 'cm-bencivenga', command: '*proof-stack',  purpose: 'Proof stack com 11 elementos' },
          { agent: 'cm-evaldo',     command: '*sales-letter', purpose: 'Sales letter 16-word framework' },
        ]
      },
      {
        name: 'Funil de venda assistida',
        description: 'Qualificação antes de apresentar o preço',
        steps: [
          { agent: 'cm-brunson',    command: '*webinar',      purpose: 'Perfect Webinar para captar aplicações' },
          { agent: 'hz-closer',     command: '*closer',       purpose: 'Script CLOSER para chamadas de venda' },
          { agent: 'hz-closer',     command: '*objections',   purpose: 'Scripts de tratamento de objeções' },
          { agent: 'cm-bencivenga', command: '*qualificacao', purpose: 'Qualificação rigorosa de prospects' },
        ]
      },
      {
        name: 'Workshop de venda',
        description: 'Experiência que vende entregando valor',
        steps: [
          { agent: 'hz-workshop',   command: '*design',       purpose: 'Design do workshop pelo framework VAM' },
          { agent: 'hz-workshop',   command: '*deliverables', purpose: 'Entregáveis que participantes levam pra casa' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     9. GO-TO-MARKET DE STARTUP
     ───────────────────────────────────────────────────────────── */
  {
    id: 'startup-gtm',
    title: 'Go-to-Market de Startup',
    icon: '🔥',
    category: 'launch',
    tagline: 'Do PRD ao primeiro milhão em receita',
    description: 'Use quando é uma startup nova e precisa validar, posicionar, lançar e crescer. Não é só marketing — é estratégia completa de entrada no mercado.',
    difficulty: 'hard',
    timeEstimate: '12+ semanas',
    outcome: 'Primeiro milhão em receita com CAC previsível e retenção saudável',
    phases: [
      {
        name: 'Research & PRD',
        description: 'Entender antes de construir',
        steps: [
          { agent: 'aiox-atlas',    command: '*perform-market-research', purpose: 'Pesquisa de mercado estruturada' },
          { agent: 'aiox-atlas',    command: '*create-competitor-analysis', purpose: 'Análise competitiva profunda' },
          { agent: 'aiox-morgan',   command: '*create-prd',   purpose: 'PRD completo do MVP' },
          { agent: 'aiox-aria',     command: '*create-full-stack-architecture', purpose: 'Arquitetura fullstack' },
        ]
      },
      {
        name: 'Marca de startup',
        description: 'Obsessão desde o dia um, não depois do PMF',
        steps: [
          { agent: 'brand-emily',   command: '*why-test',     purpose: 'Teste do Por Quê até o medo profundo' },
          { agent: 'brand-emily',   command: '*ladder',       purpose: 'Escada funcional → emocional' },
          { agent: 'brand-emily',   command: '*position',     purpose: 'Posicionamento de startup em template' },
          { agent: 'brand-naming',  command: '*generate',     purpose: 'Naming estratégico' },
        ]
      },
      {
        name: 'Go-to-Market',
        description: 'Estratégia executiva de entrada',
        steps: [
          { agent: 'cl-cmo',        command: '*gtm',          purpose: 'Plano completo de GTM' },
          { agent: 'cl-cmo',        command: '*position',     purpose: 'Posicionamento STP' },
          { agent: 'cl-cmo',        command: '*demand',       purpose: 'Funil de demanda full-funnel' },
          { agent: 'data-sean',     command: '*pmf',          purpose: 'Validar product-market fit' },
        ]
      },
      {
        name: 'Crescimento & escala',
        description: 'De primeiros 100 a primeiros 10k clientes',
        steps: [
          { agent: 'ab-reid',       command: '*blitz',        purpose: 'Avaliar blitzscaling' },
          { agent: 'data-sean',     command: '*growth',       purpose: 'Ciclos de crescimento (growth loops)' },
          { agent: 'tr-ralph',      command: '*five-levels',  purpose: 'Estrutura full-funnel de tráfego' },
          { agent: 'cl-coo',        command: '*structure',    purpose: 'Estrutura organizacional para escalar' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     10. TURNAROUND DE NEGÓCIO EM CRISE
     ───────────────────────────────────────────────────────────── */
  {
    id: 'business-turnaround',
    title: 'Turnaround de Negócio em Crise',
    icon: '🚨',
    category: 'diagnostic',
    tagline: 'Parar a sangria, achar a causa-raiz, reconstruir',
    description: 'Use quando o negócio está quebrando — receita em queda, burn rate alto, time desmoralizado. Combina diagnóstico brutal, decisões de capital e reconstrução cultural.',
    difficulty: 'hard',
    timeEstimate: '4-12 semanas',
    outcome: 'Operação estabilizada, causa-raiz endereçada e plano de recuperação em execução',
    phases: [
      {
        name: 'Diagnóstico brutal',
        description: 'Ver a realidade sem açúcar',
        steps: [
          { agent: 'hz-audit',      command: '*full-audit',   purpose: 'Auditoria 6M completa' },
          { agent: 'hz-advisor',    command: '*diagnose',     purpose: 'Encontrar A única restrição' },
          { agent: 'ab-dalio',      command: '*radical',      purpose: 'Implementar transparência radical' },
          { agent: 'ab-munger',     command: '*invert',       purpose: 'Pensar ao contrário sobre o que está matando' },
        ]
      },
      {
        name: 'Parar a sangria',
        description: 'Decisões difíceis de curto prazo',
        steps: [
          { agent: 'cl-coo',        command: '*kpi',          purpose: 'Dashboard de KPIs críticos' },
          { agent: 'tr-fiscal',     command: '*cash-flow',    purpose: 'Modelo de cash flow realista' },
          { agent: 'hz-retention',  command: '*reactivation', purpose: 'Win-back de clientes para caixa imediato' },
          { agent: 'hz-models',     command: '*recurring',    purpose: 'Desenhar receita recorrente se ausente' },
        ]
      },
      {
        name: 'Cultura & liderança',
        description: 'Sem time saudável, o resto não sustenta',
        steps: [
          { agent: 'ab-lencioni',   command: '*health',       purpose: 'Diagnosticar saúde de equipe' },
          { agent: 'ab-brene',      command: '*courage',      purpose: 'Desenvolver liderança corajosa' },
          { agent: 'ab-sinek',      command: '*purpose',      purpose: 'Realinhar organização ao propósito' },
        ]
      },
      {
        name: 'Reconstrução',
        description: 'Roadmap para sair do buraco',
        steps: [
          { agent: 'hz-scale',      command: '*stage',        purpose: 'Identificar o estágio de escala atual' },
          { agent: 'hz-models',     command: '*transition',   purpose: 'Transição de modelo se necessário' },
          { agent: 'cl-vision',     command: '*pivot',        purpose: 'Avaliar oportunidades de pivot' },
          { agent: 'hz-audit',      command: '*improvement',  purpose: 'Roadmap 30/60/90' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     11. PLANEJAMENTO ESTRATÉGICO EXECUTIVO
     ───────────────────────────────────────────────────────────── */
  {
    id: 'strategic-planning',
    title: 'Planejamento Estratégico Executivo',
    icon: '♟️',
    category: 'strategy',
    tagline: 'Do diagnóstico da visão ao OKR trimestral com todo o C-Level alinhado',
    description: 'Use para o planejamento anual ou trimestral executivo, quando precisa alinhar visão, tecnologia, IA, operações e marketing em uma direção coerente. Combina o C-Level Squad com o Advisory Board.',
    difficulty: 'hard',
    timeEstimate: '3-5 semanas',
    outcome: 'Plano estratégico executável com visão clara, OKRs por função e orçamento alinhado',
    phases: [
      {
        name: 'Diagnóstico estratégico',
        description: 'Onde estamos e onde a realidade aponta',
        steps: [
          { agent: 'cl-vision',   command: '*diagnose',     purpose: 'Diagnosticar desafio estratégico' },
          { agent: 'ab-munger',   command: '*invert',       purpose: 'Pensar ao contrário sobre o problema' },
          { agent: 'ab-dalio',    command: '*principles',   purpose: 'Codificar princípios de decisão' },
        ]
      },
      {
        name: 'Visão & estratégia',
        description: 'Definir para onde vamos — e por quê',
        steps: [
          { agent: 'cl-vision',   command: '*vision',       purpose: 'Definir visão, missão e direção' },
          { agent: 'cl-vision',   command: '*strategy',     purpose: 'Plano estratégico em 3 horizontes' },
          { agent: 'ab-sinek',    command: '*why',          purpose: 'Articular o Porquê profundo' },
          { agent: 'ab-sivers',   command: '*focus',        purpose: 'Hell Yeah or No — cortar ruído' },
        ]
      },
      {
        name: 'Alinhamento C-Level',
        description: 'Cada função traduzindo a visão em ação',
        steps: [
          { agent: 'cl-cto',      command: '*roadmap',      purpose: 'Roadmap de tecnologia alinhado à estratégia' },
          { agent: 'cl-cmo',      command: '*gtm',          purpose: 'Go-to-market com posicionamento claro' },
          { agent: 'cl-coo',      command: '*okr',          purpose: 'OKRs em nível empresa → departamento → time' },
          { agent: 'cl-caio',     command: '*ai-strategy',  purpose: 'Estratégia de IA priorizada' },
          { agent: 'cl-cio',      command: '*transform',    purpose: 'Roadmap de transformação digital' },
        ]
      },
      {
        name: 'Cultura & comunicação',
        description: 'Traduzir o plano em comportamento',
        steps: [
          { agent: 'cl-vision',   command: '*culture',      purpose: 'Arquitetar cultura para suportar a estratégia' },
          { agent: 'cl-vision',   command: '*board',        purpose: 'Preparar apresentação para o board' },
          { agent: 'cl-vision',   command: '*synthesize',   purpose: 'Sintetizar outputs em direção unificada' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     12. DESIGN SYSTEM DO ZERO
     ───────────────────────────────────────────────────────────── */
  {
    id: 'design-system-zero',
    title: 'Design System do Zero',
    icon: '🧩',
    category: 'ops',
    tagline: 'De componentes soltos a um sistema escalável adotado pelos times',
    description: 'Use quando o produto cresceu mas o design está inconsistente, cada tela tem seus próprios botões e o handoff design→dev é doloroso. Cria o sistema e garante adoção real.',
    difficulty: 'hard',
    timeEstimate: '8-16 semanas',
    outcome: 'Design system com tokens, componentes versionados e adoção >80% nos times',
    phases: [
      {
        name: 'Diagnóstico & arquitetura',
        description: 'Entender o terreno antes de construir',
        steps: [
          { agent: 'ds-chief',    command: '*audit',        purpose: 'Auditoria de design e acessibilidade' },
          { agent: 'ds-brad',     command: '*audit',        purpose: 'Auditoria do sistema existente' },
          { agent: 'ds-dave',     command: '*assess',       purpose: 'Avaliar maturidade e prontidão DesignOps' },
          { agent: 'aiox-uma',    command: '*audit',        purpose: 'Scan do codebase para redundâncias de UI' },
        ]
      },
      {
        name: 'Tokens & estrutura',
        description: 'As fundações invisíveis do sistema',
        steps: [
          { agent: 'ds-brad',     command: '*atomic',       purpose: 'Metodologia Atomic Design aplicada' },
          { agent: 'ds-arch',     command: '*token',        purpose: 'Desenhar e implementar design tokens' },
          { agent: 'aiox-uma',    command: '*tokenize',     purpose: 'Extrair tokens dos padrões consolidados' },
          { agent: 'ds-brad',     command: '*tokens',       purpose: 'Arquitetura de design tokens' },
        ]
      },
      {
        name: 'Componentes & documentação',
        description: 'O sistema vira produto',
        steps: [
          { agent: 'ds-arch',     command: '*component',    purpose: 'APIs de componente (props, variants, states)' },
          { agent: 'ds-arch',     command: '*library',      purpose: 'Arquitetar biblioteca completa' },
          { agent: 'ds-arch',     command: '*document',     purpose: 'Documentação e guias de uso' },
          { agent: 'ds-ui',       command: '*implement',    purpose: 'Implementar em código de produção' },
          { agent: 'aiox-uma',    command: '*a11y-check',   purpose: 'Auditoria de acessibilidade WCAG' },
        ]
      },
      {
        name: 'Adoção & governança',
        description: 'O sistema só vale se for usado',
        steps: [
          { agent: 'ds-dan',      command: '*pilot',        purpose: 'Projeto piloto para provar valor' },
          { agent: 'ds-dan',      command: '*adopt',        purpose: 'Dirigir adoção sem forçar' },
          { agent: 'ds-dan',      command: '*govern',       purpose: 'Governance e modelo de contribuição' },
          { agent: 'ds-dave',     command: '*process',      purpose: 'Otimizar workflow e entrega de design' },
          { agent: 'ccm-anvil',   command: '*create-skill', purpose: 'Documentar padrões como skills reusáveis' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     13. NARRATIVA DE MARCA PARA CRESCIMENTO
     ───────────────────────────────────────────────────────────── */
  {
    id: 'brand-narrative',
    title: 'Narrativa de Marca para Crescimento',
    icon: '📖',
    category: 'brand',
    tagline: 'Storytelling estratégico que faz a marca grudar na mente',
    description: 'Use quando a marca tem posicionamento, mas não tem história que cole — o cliente não sabe contar sobre você. Combina storytelling clássico, brand voice e copy voice-of-customer.',
    difficulty: 'medium',
    timeEstimate: '4-6 semanas',
    outcome: 'Conjunto de narrativas (fundador, cliente, missão, produto) que o time usa em vendas, marketing e recrutamento',
    phases: [
      {
        name: 'Diagnóstico narrativo',
        description: 'Qual história a marca está tentando contar',
        steps: [
          { agent: 'st-chief',    command: '*diagnose',     purpose: 'Diagnosticar desafio narrativo' },
          { agent: 'st-chief',    command: '*audit',        purpose: 'Auditar narrativa contra múltiplos frameworks' },
          { agent: 'brand-chief', command: '*diagnose',     purpose: 'Triagem de brand para contexto estratégico' },
        ]
      },
      {
        name: 'Estruturas universais',
        description: 'Ancorar em padrões que funcionam há milênios',
        steps: [
          { agent: 'st-campbell', command: '*journey',      purpose: 'Mapear a Jornada do Herói da marca' },
          { agent: 'st-harmon',   command: '*circle',       purpose: 'Aplicar o Story Circle' },
          { agent: 'st-park',     command: '*abt',          purpose: 'Declaração ABT (And-But-Therefore)' },
          { agent: 'st-park',     command: '*cycle',        purpose: 'Story Cycle da marca' },
        ]
      },
      {
        name: 'Histórias estratégicas',
        description: 'As 4 histórias que todo negócio precisa',
        steps: [
          { agent: 'st-kindra',   command: '*four-stories', purpose: 'Construir as 4 histórias empresariais' },
          { agent: 'st-kindra',   command: '*founder-story', purpose: 'História do fundador convincente' },
          { agent: 'st-kindra',   command: '*value-story',  purpose: 'Histórias de Valor para vendas' },
          { agent: 'brand-miller',command: '*storybrand',   purpose: 'BrandScript SB7 com cliente como herói' },
        ]
      },
      {
        name: 'Voz & ativação',
        description: 'Colocar as histórias em operação',
        steps: [
          { agent: 'cm-joanna',   command: '*mine',         purpose: 'Message mining — palavras exatas do cliente' },
          { agent: 'brand-arch',  command: '*tone',         purpose: 'Guia de tom de voz por arquétipo' },
          { agent: 'st-chief',    command: '*synthesize',   purpose: 'Sintetizar em storytelling playbook' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     14. APRESENTAÇÃO EXECUTIVA DE ALTO IMPACTO
     ───────────────────────────────────────────────────────────── */
  {
    id: 'executive-presentation',
    title: 'Apresentação Executiva de Alto Impacto',
    icon: '🎤',
    category: 'sales',
    tagline: 'Do keynote de conferência ao board — narrativa, frame e clareza',
    description: 'Use para keynote, apresentação de board, reunião de all-hands ou grande pitch. Funciona quando a mensagem precisa mover audiência qualificada a decidir algo.',
    difficulty: 'medium',
    timeEstimate: '2-4 semanas',
    outcome: 'Apresentação com estrutura Sparkline, frame controlado, momento STAR e one-liner memorável',
    phases: [
      {
        name: 'Triagem & estratégia',
        description: 'Qual tipo de apresentação é realmente?',
        steps: [
          { agent: 'st-chief',    command: '*diagnose',     purpose: 'Triagem narrativa e roteamento' },
          { agent: 'st-chief',    command: '*framework',    purpose: 'Comparar frameworks de storytelling' },
        ]
      },
      {
        name: 'Estrutura narrativa',
        description: 'Cabeamento invisível que sustenta a mensagem',
        steps: [
          { agent: 'st-duarte',   command: '*sparkline',    purpose: 'Estrutura Sparkline para apresentação' },
          { agent: 'st-duarte',   command: '*star',         purpose: 'Projetar o S.T.A.R. moment' },
          { agent: 'st-duarte',   command: '*bigidea',      purpose: 'Big Idea em uma frase' },
        ]
      },
      {
        name: 'Frame & pitch',
        description: 'Controlar a dinâmica de status e energia',
        steps: [
          { agent: 'st-klaff',    command: '*pitch',        purpose: 'Estrutura STRONG para pitch alto-stakes' },
          { agent: 'st-klaff',    command: '*frame',        purpose: 'Estratégia de controle de frame' },
          { agent: 'st-klaff',    command: '*hookpoint',    purpose: 'Projetar o momento hookpoint' },
        ]
      },
      {
        name: 'Fala & ensaio',
        description: 'A execução que entrega a idéia',
        steps: [
          { agent: 'st-dicks',    command: '*moment',       purpose: 'Achar o momento de 5 segundos' },
          { agent: 'st-dicks',    command: '*stakes',       purpose: 'Carregar a audiência de stakes' },
          { agent: 'brand-miller',command: '*one-liner',    purpose: 'One-liner que o público leva para casa' },
          { agent: 'cm-voss',     command: '*accusation-audit', purpose: 'Antecipar e desarmar objeções' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     15. RESOLUÇÃO DE CRISE CULTURAL
     ───────────────────────────────────────────────────────────── */
  {
    id: 'culture-crisis',
    title: 'Resolução de Crise Cultural',
    icon: '🤝',
    category: 'ops',
    tagline: 'Quando a equipe está quebrada — confiança, conflito e reconstrução',
    description: 'Use quando há sinais claros de disfunção no time: reuniões improdutivas, gente boa saindo, silos entre áreas, fofoca, moral baixa. Combina frameworks de saúde organizacional com liderança corajosa.',
    difficulty: 'hard',
    timeEstimate: '6-12 semanas',
    outcome: 'Equipe com confiança reconstruída, conflito saudável ativado e accountability sem medo',
    phases: [
      {
        name: 'Diagnóstico honesto',
        description: 'Parar de negar a realidade',
        steps: [
          { agent: 'ab-lencioni', command: '*health',       purpose: 'Diagnosticar saúde do time (5 disfunções)' },
          { agent: 'ab-lencioni', command: '*pyramid',      purpose: 'Aplicar Pirâmide das 5 Disfunções' },
          { agent: 'ab-dalio',    command: '*radical',      purpose: 'Implementar transparência radical' },
          { agent: 'cl-coo',      command: '*diagnose',     purpose: 'Health check operacional de 6 dimensões' },
        ]
      },
      {
        name: 'Confiança & vulnerabilidade',
        description: 'Base de tudo',
        steps: [
          { agent: 'ab-lencioni', command: '*trust',        purpose: 'Construir confiança via vulnerabilidade' },
          { agent: 'ab-brene',    command: '*vulnerability', purpose: 'Estruturar conversa de vulnerabilidade' },
          { agent: 'ab-brene',    command: '*courage',      purpose: 'Desenvolver liderança corajosa' },
          { agent: 'ab-brene',    command: '*belonging',    purpose: 'Arquitetar cultura de pertencimento' },
        ]
      },
      {
        name: 'Conflito & accountability',
        description: 'Estruturar atrito saudável',
        steps: [
          { agent: 'ab-lencioni', command: '*conflict',     purpose: 'Estruturar conflito produtivo' },
          { agent: 'ab-lencioni', command: '*accountability', purpose: 'Implementar accountability sem punição' },
          { agent: 'ab-brene',    command: '*shame',        purpose: 'Mapear dinâmica de vergonha' },
        ]
      },
      {
        name: 'Propósito & reestruturação',
        description: 'Onde reconstruir em cima',
        steps: [
          { agent: 'ab-sinek',    command: '*purpose',      purpose: 'Realinhar organização ao propósito' },
          { agent: 'ab-sinek',    command: '*inspire',      purpose: 'Estruturar liderança inspiradora' },
          { agent: 'cl-vision',   command: '*culture',      purpose: 'Framework cultural em 5 pilares' },
          { agent: 'cl-coo',      command: '*structure',    purpose: 'Estrutura organizacional apropriada' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     16. UX RESEARCH + REDESIGN
     ───────────────────────────────────────────────────────────── */
  {
    id: 'ux-redesign',
    title: 'UX Research + Redesign de Produto',
    icon: '🎨',
    category: 'ops',
    tagline: 'Do insight do usuário à tela lançada — evidência vence opinião',
    description: 'Use quando o produto parou de crescer e ninguém sabe por quê, ou quando há muito ruído de feedback e pouco sinal. Combina pesquisa qualitativa, dados comportamentais e redesign completo.',
    difficulty: 'medium',
    timeEstimate: '6-10 semanas',
    outcome: 'Redesign baseado em evidência com hipóteses testadas e métricas de sucesso definidas',
    phases: [
      {
        name: 'Pesquisa & descoberta',
        description: 'Entender o usuário antes de redesenhar',
        steps: [
          { agent: 'ds-ux',       command: '*research',     purpose: 'Pesquisa com usuários (qualitativa)' },
          { agent: 'ds-ux',       command: '*persona',      purpose: 'Personas backed por pesquisa real' },
          { agent: 'ds-ux',       command: '*journey',      purpose: 'Mapear user journey atual e futuro' },
          { agent: 'aiox-uma',    command: '*research',     purpose: 'Workflow completo de UX research' },
        ]
      },
      {
        name: 'Dados comportamentais',
        description: 'O que os dados dizem que os usuários não dizem',
        steps: [
          { agent: 'data-avinash', command: '*see',         purpose: 'Análise See-Think-Do-Care do funil' },
          { agent: 'data-avinash', command: '*segment',     purpose: 'Segmentar por comportamento real' },
          { agent: 'cm-joanna',    command: '*mine',        purpose: 'Message mining dos reviews e SAC' },
        ]
      },
      {
        name: 'Design & prototipação',
        description: 'Materializar as hipóteses',
        steps: [
          { agent: 'ds-ux',        command: '*wireframe',   purpose: 'Wireframes de baixa fidelidade' },
          { agent: 'ds-ux',        command: '*flow',        purpose: 'User flows e task flows' },
          { agent: 'ds-vis',       command: '*identity',    purpose: 'Direção visual alinhada à marca' },
          { agent: 'ds-arch',      command: '*component',   purpose: 'APIs dos componentes do redesign' },
          { agent: 'aiox-uma',     command: '*build',       purpose: 'Construir componente atômico production-ready' },
        ]
      },
      {
        name: 'Validação & handoff',
        description: 'Testar antes de lançar',
        steps: [
          { agent: 'ds-ux',        command: '*test',        purpose: 'Teste de usabilidade com usuários reais' },
          { agent: 'ds-ux',        command: '*audit',       purpose: 'Auditoria de acessibilidade (WCAG)' },
          { agent: 'ds-ui',        command: '*implement',   purpose: 'Implementar em código de produção' },
          { agent: 'data-sean',    command: '*test',        purpose: 'Estruturar experimentos de crescimento pós-lançamento' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     17. SECURITY BASELINE PARA SAAS
     ───────────────────────────────────────────────────────────── */
  {
    id: 'security-baseline',
    title: 'Security Baseline para SaaS',
    icon: '🛡️',
    category: 'ops',
    tagline: 'Postura de segurança mínima aceitável antes de crescer ou vender',
    description: 'Use ao fechar primeiros enterprise deals, ao se preparar para due diligence, ou ao expandir para mercados regulados. Estabelece fundação de segurança sem overkill.',
    difficulty: 'hard',
    timeEstimate: '6-12 semanas',
    outcome: 'Baseline de segurança documentada, reconhecimento externo concluído e roadmap de compliance',
    phases: [
      {
        name: 'Reconhecimento & avaliação',
        description: 'Ver sua própria superfície de ataque',
        steps: [
          { agent: 'cl-cio',       command: '*audit',       purpose: 'Auditoria de TI — sistemas, segurança, compliance' },
          { agent: 'cl-cio',       command: '*secure',      purpose: 'Avaliar postura de segurança' },
          { agent: 'cyber-bust',   command: '*bust',        purpose: 'Descoberta de conteúdo web exposto' },
          { agent: 'cyber-bust',   command: '*api',         purpose: 'Enumeração de endpoints de API' },
        ]
      },
      {
        name: 'Arquitetura segura',
        description: 'Desenhar com segurança embutida',
        steps: [
          { agent: 'aiox-aria',    command: '*create-full-stack-architecture', purpose: 'Arquitetura com security-first' },
          { agent: 'aiox-dara',    command: '*security-audit', purpose: 'Auditoria de DB + RLS policies' },
          { agent: 'aiox-dara',    command: '*create-rls-policies', purpose: 'Desenhar RLS no Postgres/Supabase' },
          { agent: 'cl-cto',       command: '*architect',   purpose: 'Trade-offs técnicos de segurança' },
        ]
      },
      {
        name: 'Compliance & governança',
        description: 'Do técnico ao regulatório',
        steps: [
          { agent: 'cl-cio',       command: '*comply',      purpose: 'Mapear compliance aplicável (LGPD, SOC2)' },
          { agent: 'cl-cio',       command: '*govern',      purpose: 'Estabelecer governance de TI' },
          { agent: 'cl-cio',       command: '*vendor',      purpose: 'Avaliar fornecedores por risco' },
        ]
      },
      {
        name: 'Operação & resposta',
        description: 'Manter a postura ao longo do tempo',
        steps: [
          { agent: 'aiox-gage',    command: '*health-check', purpose: 'Diagnóstico de saúde do repositório' },
          { agent: 'aiox-quinn',   command: '*security-check', purpose: 'Scan de vulnerabilidades em 8 pontos' },
          { agent: 'cl-caio',      command: '*responsible', purpose: 'Framework de IA responsável' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     18. PENTEST / RED TEAM ENGAGEMENT
     ───────────────────────────────────────────────────────────── */
  {
    id: 'pentest-engagement',
    title: 'Pentest / Red Team Engagement',
    icon: '🎯',
    category: 'ops',
    tagline: 'Teste de penetração completo — do plano do jogo ao relatório executivo',
    description: 'Use em engajamentos autorizados de teste de penetração ou red team. Cobre reconhecimento, enumeração, exploração, pós-exploração e geração de relatório — com ética e autorização em primeiro lugar.',
    difficulty: 'hard',
    timeEstimate: '2-6 semanas',
    outcome: 'Relatório técnico e executivo com achados priorizados, prova de conceito e roadmap de correção',
    phases: [
      {
        name: 'Pré-engajamento & ética',
        description: 'Nada começa sem autorização escrita',
        steps: [
          { agent: 'cyber-chief',   command: '*assess',       purpose: 'Verificar autorização, escopo e plano operacional' },
          { agent: 'cyber-peter',   command: '*playbook',     purpose: 'Construir o playbook de ataque para o engajamento' },
          { agent: 'cyber-peter',   command: '*redteam',      purpose: 'Planejar operação red team com MITRE ATT&CK' },
        ]
      },
      {
        name: 'Reconhecimento & OSINT',
        description: 'Mapear o alvo antes de tocar nele',
        steps: [
          { agent: 'cyber-shannon', command: '*profile',      purpose: 'Perfil OSINT completo do alvo' },
          { agent: 'cyber-shannon', command: '*breach',       purpose: 'Verificar exposição de credenciais' },
          { agent: 'cyber-cart',    command: '*passive',      purpose: 'Reconhecimento passivo sem interação' },
          { agent: 'cyber-cart',    command: '*active',       purpose: 'Varredura ativa com autorização' },
        ]
      },
      {
        name: 'Enumeração & descoberta',
        description: 'Cada serviço tem algo a dizer',
        steps: [
          { agent: 'cyber-bust',    command: '*bust',         purpose: 'Descoberta de conteúdo web' },
          { agent: 'cyber-bust',    command: '*api',          purpose: 'Enumeração de endpoints de API' },
          { agent: 'cyber-dirber',  command: '*enum',         purpose: 'Enumeração de serviços (SMB, LDAP, SNMP)' },
          { agent: 'cyber-dirber',  command: '*ad',           purpose: 'Mapeamento de caminhos de ataque em AD' },
          { agent: 'cyber-fuzz',    command: '*fuzz',         purpose: 'Fuzzing de parâmetros e entradas' },
        ]
      },
      {
        name: 'Exploração controlada',
        description: 'Confirmar risco com impacto demonstrado',
        steps: [
          { agent: 'cyber-rip',     command: '*crack',        purpose: 'Cracking de credenciais capturadas' },
          { agent: 'cyber-rogue',   command: '*chain',        purpose: 'Cadeia de exploração até o objetivo' },
          { agent: 'cyber-rogue',   command: '*privesc',      purpose: 'Escalação de privilégio' },
          { agent: 'cyber-rogue',   command: '*lateral',      purpose: 'Movimento lateral planejado' },
          { agent: 'cyber-peter',   command: '*evasion',      purpose: 'Evasão de detecção e furtividade' },
        ]
      },
      {
        name: 'Limpeza & relatório',
        description: 'Deixar o ambiente como estava e documentar tudo',
        steps: [
          { agent: 'cyber-rogue',   command: '*cleanup',      purpose: 'Remover artefatos e ferramentas do alvo' },
          { agent: 'cyber-chief',   command: '*report',       purpose: 'Sintetizar achados em relatório' },
          { agent: 'cyber-georgia', command: '*pentest',      purpose: 'Relatório técnico + executivo' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     19. BLUE TEAM & THREAT HUNTING
     ───────────────────────────────────────────────────────────── */
  {
    id: 'blue-team-hunt',
    title: 'Blue Team & Threat Hunting',
    icon: '🛡️',
    category: 'ops',
    tagline: 'Detectar, investigar e responder antes que o dano vire notícia',
    description: 'Use quando a empresa precisa de postura defensiva real — monitoramento de rede, threat hunting proativo, resposta a incidente e programa de segurança. Complementar à estratégia Security Baseline.',
    difficulty: 'hard',
    timeEstimate: '8-16 semanas',
    outcome: 'Programa de segurança operando com detecção, hunting, IR e threat intel',
    phases: [
      {
        name: 'Fundação & programa',
        description: 'Sem estratégia, só se apaga incêndio',
        steps: [
          { agent: 'cyber-omar',    command: '*program',      purpose: 'Construir programa de cibersegurança do zero' },
          { agent: 'cyber-marcus',  command: '*lead',         purpose: 'Construção de time de segurança' },
          { agent: 'cyber-omar',    command: '*standard',     purpose: 'Padrões (CSAF, VEX, SBOM)' },
          { agent: 'cl-cio',        command: '*govern',       purpose: 'Estabelecer governança de TI' },
        ]
      },
      {
        name: 'Monitoramento de rede',
        description: 'Conhecer o normal para achar o maligno',
        steps: [
          { agent: 'cyber-sanders', command: '*monitor',      purpose: 'Arquitetura de NSM' },
          { agent: 'cyber-sanders', command: '*detect',       purpose: 'Regras de detecção (YARA, Sigma, Suricata)' },
          { agent: 'cyber-sanders', command: '*honeypot',     purpose: 'Desenhar e implantar honeypots' },
        ]
      },
      {
        name: 'Threat hunting proativo',
        description: 'Caçar, não esperar',
        steps: [
          { agent: 'cyber-sanders', command: '*hunt',         purpose: 'Operação estruturada de threat hunting' },
          { agent: 'cyber-sanders', command: '*investigate',  purpose: 'Investigação com teoria aplicada' },
          { agent: 'cyber-marcus',  command: '*threat-intel', purpose: 'Programa de threat intelligence' },
          { agent: 'cyber-marcus',  command: '*simulate',     purpose: 'Simulação de breach — testar defesas reais' },
        ]
      },
      {
        name: 'AppSec & resposta a incidente',
        description: 'Quando acontece, agir rápido e certo',
        steps: [
          { agent: 'cyber-manico',  command: '*secure',       purpose: 'Revisar código e fixes de segurança' },
          { agent: 'cyber-manico',  command: '*threat-model', purpose: 'Threat modeling da aplicação' },
          { agent: 'cyber-omar',    command: '*vuln',         purpose: 'Gestão de vulnerabilidade e disclosure' },
          { agent: 'cyber-omar',    command: '*incident',     purpose: 'Playbook de resposta a incidente' },
          { agent: 'cyber-chief',   command: '*incident',     purpose: 'Coordenar resposta a incidente em squad' },
        ]
      },
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     20. CRIAÇÃO DE VSL DE ALTA CONVERSÃO
     ───────────────────────────────────────────────────────────── */
  {
    id: 'vsl-creation',
    title: 'Criação de VSL de Alta Conversão',
    icon: '🎬',
    category: 'sales',
    tagline: 'Do RMBC research ao VSL no ar — pesquisa, mecanismo, copy e tráfego',
    description: 'Use quando precisar criar uma Video Sales Letter de verdade — não um vídeo de pitch. Combina RMBC de Stefan Georgi com Grand Slam Offer (Hormozi), prova (Bencivenga), persuasão (Cialdini/Blair), estrutura clássica de VSL (Benson) e distribuição em Meta/YouTube. Cada fase alimenta a próxima.',
    difficulty: 'hard',
    timeEstimate: '4-8 semanas',
    outcome: 'VSL com mecanismo único, proof stack robusto, oferta irresistível e funil de tráfego configurado para teste e escala',
    phases: [
      {
        name: 'Research profundo & inteligência de mercado',
        description: '40% do trabalho está aqui — pular esta fase mata a VSL',
        steps: [
          { agent: 'cm-georgi',     command: '*research',       purpose: 'Plano de pesquisa RMBC para o mercado' },
          { agent: 'cm-joanna',     command: '*mine',           purpose: 'Message mining — voice of customer real' },
          { agent: 'cm-schwartz',   command: '*diagnose',       purpose: 'Diagnosticar nível de consciência e sofisticação' },
          { agent: 'data-avinash',  command: '*see',            purpose: 'Análise See-Think-Do-Care da jornada' },
          { agent: 'hz-leads',      command: '*core-4',         purpose: 'Mapear onde a audiência está (Core 4)' },
        ]
      },
      {
        name: 'Oferta, mecanismo & Big Idea',
        description: 'Antes de qualquer copy: a substância',
        steps: [
          { agent: 'hz-offers',     command: '*grand-slam',     purpose: 'Construir a Grand Slam Offer' },
          { agent: 'hz-pricing',    command: '*premium',        purpose: 'Posicionamento premium e justificativa' },
          { agent: 'cm-georgi',     command: '*mechanism',      purpose: 'Two-Part Unique Mechanism' },
          { agent: 'cm-deutsch',    command: '*big-idea',       purpose: 'A Big Marketing Idea que sustenta a VSL' },
          { agent: 'cm-evaldo',     command: '*one-belief',     purpose: 'A One Belief que o lead deve adotar' },
        ]
      },
      {
        name: 'Estrutura & brief do VSL',
        description: 'O blueprint antes de escrever uma palavra',
        steps: [
          { agent: 'cm-georgi',     command: '*brief',          purpose: 'Brief detalhado RMBC (acelera 3-5×)' },
          { agent: 'cm-benson',     command: '*vsl',            purpose: 'Estrutura 5-step do criador do VSL' },
          { agent: 'cm-georgi',     command: '*vsl',            purpose: 'Framework de 7 seções para VSL' },
          { agent: 'cm-makepeace',  command: '*outline',        purpose: 'Arquitetura 17-step para profundidade' },
        ]
      },
      {
        name: 'Hook, abertura & fluxo',
        description: 'Os primeiros 3-30 segundos decidem 80% do resultado',
        steps: [
          { agent: 'hz-hooks',      command: '*hooks',          purpose: '10 hooks testáveis por ângulo' },
          { agent: 'cm-sugarman',   command: '*slide',          purpose: 'Slippery Slide — fluxo irresistível' },
          { agent: 'cm-halbert',    command: '*story',          purpose: 'Abertura crua orientada a história' },
          { agent: 'cm-deutsch',    command: '*fascinations',   purpose: 'Fascinations com mecanismo misterioso' },
        ]
      },
      {
        name: 'Copy persuasivo & camadas de prova',
        description: 'O coração da VSL — onde a transformação acontece',
        steps: [
          { agent: 'cm-benson',     command: '*magnify',        purpose: 'Amplificar o problema antes da solução' },
          { agent: 'cm-cialdini',   command: '*pre-suade',      purpose: 'Pre-suasão antes do pitch principal' },
          { agent: 'cm-blair',      command: '*triggers',       purpose: 'Aplicar os 5 gatilhos emocionais' },
          { agent: 'cm-collier',    command: '*mental-movie',   purpose: 'Mental movie sensorial vívido' },
          { agent: 'cm-bencivenga', command: '*proof-stack',    purpose: 'Proof stack com os 11 elementos' },
          { agent: 'cm-benson',     command: '*nlp',            purpose: 'Camadas de NLP no script' },
          { agent: 'cm-parris',     command: '*fascinations',   purpose: 'Bullets de fascinação para a oferta' },
        ]
      },
      {
        name: 'Produção, tráfego & otimização',
        description: 'A VSL no ar com tracking e plano de teste',
        steps: [
          { agent: 'tr-tom',        command: '*aducate',        purpose: 'Script ADUCATE para versão YouTube' },
          { agent: 'tr-pedro',      command: '*campanha',       purpose: 'Estrutura de campanha Meta (BR)' },
          { agent: 'tr-pixel',      command: '*setup',          purpose: 'Tracking server-side antes do go-live' },
          { agent: 'cm-claude-h',   command: '*test-plan',      purpose: 'Plano de testes A/B científico' },
          { agent: 'tr-creative',   command: '*patterns',       purpose: 'Identificar padrões vencedores' },
          { agent: 'cm-benson',     command: '*review',         purpose: 'Review final — pacing, mecanismo, NLP' },
        ]
      },
    ]
  },

];

const STRATEGIES_COUNT = STRATEGIES_DB.length;
