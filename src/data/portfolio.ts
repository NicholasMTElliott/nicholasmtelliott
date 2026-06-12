export const proofMetrics = [
  {
    value: '2010',
    label: 'founded Skyward App Company — profitable every year since',
  },
  {
    value: '15 yrs',
    label: 'leading platform delivery for Syngenta, 2011 through 2026',
  },
  {
    value: '30',
    label: 'people at peak (2023), 24 of them engineers, across five countries',
  },
  {
    value: '90k',
    label: 'fields analyzed every week by Root Cause, our production AI feature',
  },
]

export const valuePillars = [
  {
    title: 'Built Teams',
    body: 'Grew Skyward from just me to 30 people — 24 engineers — across the US, India, Brazil, Egypt, and Europe, and kept the company profitable every year.',
    icon: 'teams',
  },
  {
    title: 'Modernized Platforms',
    body: 'Moved 20 production systems from Azure to AWS in six months. Infrastructure burn dropped 25% and deployments got 75% faster.',
    icon: 'platforms',
  },
  {
    title: 'Shipped Production AI',
    body: 'Root Cause analyzes 90,000 grower fields a week and puts actionable findings in front of 90% of growers.',
    icon: 'ai',
  },
  {
    title: 'Stayed Technical',
    body: 'From a custom MySQL storage engine in the early 2000s to AWS CDK and LLM pipelines today, I have never stopped doing technical work alongside the leadership work.',
    icon: 'trust',
  },
] as const

export const selectedAchievements = [
  {
    title: 'Built Skyward App Company from one person into a 30-person firm, profitable for sixteen straight years.',
    role: 'Founder, Managing Director, CTO',
    outcome: 'Hired and mentored a 24-engineer team, built the delivery practices, and kept client relationships running for a decade or more.',
    scale: '$3.4M peak revenue (2023) · zero unprofitable years',
  },
  {
    title: 'Led Syngenta’s seed-recommendation platforms for fifteen years, from regional tool to global systems.',
    role: 'Primary technical partner and architect',
    outcome: 'E-Luminate (later GHX Fields) supports a few hundred advisors serving 10,000+ growers in the US and Canada; Cropwise reaches similar scale in markets including Argentina, Brazil, Germany, Ukraine, and Hungary.',
    scale: '2011–2026 · three continents',
  },
  {
    title: 'Moved 20 production systems from Azure to AWS in six months without pausing feature delivery.',
    role: 'Architect and migration lead',
    outcome: 'Replaced click-ops with AWS CDK infrastructure-as-code, cut infrastructure burn 25%, made deployments 75% faster, and passed SOC 2 Type 2 in 2025.',
    scale: '20 systems · 6 months',
  },
  {
    title: 'Shipped Root Cause, an AI feature analyzing 90,000 fields every week in production.',
    role: 'Product and engineering lead',
    outcome: 'Proactively surfaces agronomic and environmental concerns with suggested mitigations, reaching 90% of growers and saving each dozens of hours per season.',
    scale: 'In production since 2026',
  },
]

export const hardProblems = [
  {
    title: 'A storage engine, not a server upgrade',
    body: 'Our weather-data platform was growing a terabyte a day. I wrote a custom MySQL table handler that brought daily growth down to 12GB and cut average processing time from 20 minutes to 20 seconds.',
  },
  {
    title: 'GPS before smartphones',
    body: 'In the early 2000s I debugged serial carrier-signal issues between GPS units and Dell Axim handhelds for field data collection — no SDKs, no Stack Overflow, just protocol documentation and patience.',
  },
  {
    title: 'SOC 2 without the theater',
    body: 'Took Skyward through SOC 2 Type 2 in 2025 with minimal remediation by building controls on the observability and processes we already ran, instead of bolting on paperwork.',
  },
  {
    title: 'Handing over fifteen years of work',
    body: 'Planned and executed the transition of the Syngenta platforms to internal teams: documentation, mentoring, and honest conversations about what each team was ready to own.',
  },
]

export const openSourceRepos = [
  {
    name: 'task-board',
    href: 'https://github.com/NicholasMTElliott/task-board',
    summary: 'Kanban-style control surface for managing AI agent work alongside an existing toolchain.',
  },
  {
    name: 'codex-image-gen',
    href: 'https://github.com/NicholasMTElliott/codex-image-gen',
    summary: 'Node CLI wrapping Codex image generation for repeatable asset workflows.',
  },
  {
    name: 'local-llm',
    href: 'https://github.com/NicholasMTElliott/local-llm',
    summary: 'Notes and experiments from running models locally with vLLM and Ollama.',
  },
  {
    name: 'popcorn',
    href: 'https://github.com/SkywardApps/popcorn',
    summary: 'REST middleware that lets API clients shape response payloads, cutting endpoint sprawl.',
  },
]

export const technologyEvidence = [
  {
    area: 'Cloud',
    tools: 'AWS CDK, Fargate, Lambda, API Gateway, VPC, Azure migration',
    proof: 'Migrated 20 systems from Azure to AWS in six months: 25% lower burn rate, 75% faster deployments.',
  },
  {
    area: 'AI',
    tools: 'LLM APIs, Root Cause, report generation, vLLM, Ollama',
    proof: 'Root Cause analyzes 90,000 fields a week in production; local-model experiments with vLLM and Ollama.',
  },
  {
    area: 'Observability',
    tools: 'OpenTelemetry, Grafana, Loki, Tempo, Prometheus/Mimir, Datadog',
    proof: 'Instrumented the Syngenta platforms end to end; the same telemetry became SOC 2 audit evidence.',
  },
  {
    area: 'Enterprise Integrations',
    tools: 'Salesforce, SAP, internal systems, sales hierarchy abstraction',
    proof: 'One sales-hierarchy abstraction serving commercial workflows across three continents.',
  },
  {
    area: 'Backend Platforms',
    tools: '.NET, .NET Core, Node.js, REST APIs, Redis, RabbitMQ, Temporal',
    proof: 'Service boundaries, caching, and workflow engines for systems that have run for over a decade.',
  },
  {
    area: 'Frontend & Mobile',
    tools: 'TypeScript, React, Knockout migration, iOS, Android, React Native',
    proof: 'From Pocket PC field devices in the early 2000s to the React tools advisors use with growers today.',
  },
  {
    area: 'Deep Systems',
    tools: 'MySQL internals, GPS hardware, geospatial math, rendering/performance',
    proof: 'Custom MySQL storage engine: daily data growth cut from 1TB to 12GB, 20-minute jobs down to 20 seconds.',
  },
]

export const syngentaArchitectureAreas = [
  {
    title: 'Commercial Web Apps',
    body: 'Seller and agronomist tools that grew from a regional sustainability app into recommendation systems used by a few hundred advisors serving 10,000+ growers.',
  },
  {
    title: 'Recommendation & Catalog Systems',
    body: 'Whole-farm seed strategy, product catalogs, branded PDF generation, soil and weather characteristics, discount and diversification logic.',
  },
  {
    title: 'Enterprise Integrations',
    body: 'Salesforce, SAP, regional sales hierarchies, product catalogs, and territory abstractions shared across product teams.',
  },
  {
    title: 'AI Analysis',
    body: 'Root Cause proactively analyzes agronomic and environmental patterns across 90,000 fields a week, surfacing concerns and suggested mitigations.',
  },
  {
    title: 'Cloud Modernization',
    body: 'Twenty systems moved from Azure click-ops and .NET Framework to AWS CDK, Fargate, Lambda, and VPC-segmented infrastructure in six months.',
  },
  {
    title: 'Operations & Trust',
    body: 'OpenTelemetry with Grafana, Prometheus/Mimir, Loki, and Tempo, centralized secrets, and the operational maturity behind a 2025 SOC 2 Type 2 audit.',
  },
]
