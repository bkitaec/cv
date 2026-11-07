export interface MIC3Project {
  id: string
  name: string
  period: string
  description: string
  highlights: string[]
  tech: string[]
  link?: string
  aiPowered?: boolean
  aiPercentage?: number
}

export const mic3Projects: MIC3Project[] = [
  {
    id: 'platform-v1',
    name: 'Affectli Platform',
    period: '2018 - Present',
    description:
      'Ontology-based "Business Operating System" that unifies legacy systems, IoT devices and data streams into a real-time single pane of glass. Used in oil & gas, telecom, mining, utilities and security operations. Top contributor to the frontend: ~26% of the current codebase and 3,500+ merge requests reviewed and merged into master.',
    highlights: [
      'No-code Form Designer: 46 field types (authored 13), versioning, import/export, input masks, device-aware fields',
      'BPMN Process Designer on bpmn-js: script tasks, Java delegates, listeners, signals, gateways, versioning',
      'Data Pipeline Designer & Monitor: node editor with connectors, live status, validation and versioning',
      'Keycloak security admin console: auth flows, identity/OpenID providers (PKCE), tokens, OTP, brute-force protection',
      'Ontology & entity UI: classes, relationships graph, sharing and permissions, calculated attributes',
      'Bryntum grids and task boards, print templates, background jobs, events monitor, workspaces & teams',
      'GraphQL layer of 400+ operations with Apollo Client and WebSocket subscriptions',
      'Engineering health: removed Flow from 1,400+ files, dropped PrimeReact, moved builds to Rspack',
      'Release management across 17 release branches; maintainer of the shared component library and Keycloak themes',
      'Migrated the E2E suite from Puppeteer to Playwright (Cucumber/Gherkin, GitLab CI)',
    ],
    tech: [
      'React',
      'Redux',
      'GraphQL',
      'Apollo Client',
      'BPMN.js',
      'Bryntum',
      'Keycloak',
      'OpenLayers',
      'Rspack',
      'Playwright',
    ],
    link: 'https://affectli.com',
  },
  {
    id: 'comply-respond',
    name: 'ComplyRespond.ai (Mi-Comply)',
    period: '2025 - Present',
    description:
      'White-label, multi-tenant third-party risk & compliance platform on Affectli. Main developer: 1,420+ of 1,430 commits across UI, backend scripts, ontology, LLM agents and deploy.',
    aiPowered: true,
    aiPercentage: 95,
    highlights: [
      'AI assistant: Claude orchestrator + 4 domain subagents and a product-docs RAG tool; every data read goes through user-scoped functions',
      'Automatic AI review of vendor questionnaires: rubric prompt, queue worker, prompt-injection sanitiser, evals vs human reviews',
      'OWASP Top 10: fixed cross-customer access leaks, added CSP, DOMPurify hardened against mXSS, login rate limiting',
      'ECharts analytics: heatmaps, parallel, gauges, Risk Flow Sankey; charts in PDF/Excel/CSV export',
      'Product tour, onboarding wizard, white-label theming, dark mode, accessibility menu with usage stats',
      'Docker + Helm on Kubernetes (dev/QA/prod) via GitLab CI; Playwright E2E',
      '~95% of the code written with Claude Code (CLAUDE.md, custom agents, spec-then-plan workflow)',
    ],
    tech: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind',
      'Apollo Client',
      'ECharts',
      'DOMPurify',
      'Keycloak',
      'Helm',
      'Playwright',
      'Claude AI',
    ],
    link: 'https://complyrespond.ai',
  },
  {
    id: 'telkom',
    name: 'Telkom — Telco Incident Management',
    period: '2026 - Present',
    description:
      'Incident management system for a telecom operator built on Affectli: site alarms become NOC tickets, NOC operators dispatch field tickets to engineers on a mobile app. Wrote most of the application code across NOC, field and shared apps.',
    aiPowered: true,
    highlights: [
      'Migrated the NOC UI to TypeScript, Apollo Client and Tailwind; incidents, alarm events, Kanban boards, ECharts',
      'Digital twins of sites: live sensor data, CCTV zones, gate/lock state, Digital Twin Manager',
      'Security incident flow across NOC and field apps, with Google Maps directions for engineers',
      'Command Centre: MapLibre globe control room, app launcher, entity catalog for 23 entity types',
      'Six Affectli LLM agents (orchestrator, dispatch, handover, incidents, sites, field) with entity cards in chat',
      'Tenant SLA & service-credit reporting with CSV export; multi-tenant workspace isolation',
      'Helm/Kubernetes deploy pipeline on GitLab CI and Makefile-driven dev/deploy tooling',
    ],
    tech: [
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind',
      'Apollo Client',
      'MapLibre GL',
      'Keycloak',
      'Kubernetes',
      'Claude AI',
    ],
  },
]
