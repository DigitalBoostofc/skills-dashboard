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

];

const STRATEGIES_COUNT = STRATEGIES_DB.length;
