# Beyond IC — Project Context

## What This Is
A self-guided, multi-page website for engineering leaders who want to build high-performing teams. It covers the transition from individual contributor to leader: mindset shifts, clean code practices, mentoring, feedback, delivery, stakeholder communication, and more.

Hosted on GitHub Pages. Built as static HTML/CSS/JS with no build step.

## Who It's For
Engineering leaders (typically 6+ years experience) on any team, at any company. They are skilled coders who need to develop leadership muscles: setting standards, growing people, driving change, and building team culture.

## Tone — This Is Critical
This is a **learning resource**, not a performance review. The tone must be:
- **Empowering and growth-oriented** — "here's what great leaders do" not "here's what you're doing wrong"
- **Mentor-like** — a wise colleague sharing frameworks, not a manager listing complaints
- **Respectful** — assume the reader is trying their best and just needs better tools
- **Practical** — every section should have actionable frameworks, not just theory

### What to AVOID:
- Accusatory language ("you're not doing X", "this is broken", "nobody does X")
- Singling out roles, experience levels, or specific people
- "Truth bomb" framing — use "Key Insight" instead
- Language that makes the reader feel attacked or judged
- Team-specific internal references (specific tech debt items, team composition, named individuals)
- The word "Multiplier" as a role name — use "Leader" instead
- References to specific personas like "Catalyst" or "Artisan"

### What to DO:
- Use reflective questions ("Ask yourself: am I doing X?")
- Frame as frameworks and techniques ("The 5 Cs of Delegation", "The SBI Feedback Model")
- Acknowledge that leadership is hard ("This is one of the most challenging transitions...")
- Include external references (books, videos, articles) so people can go deeper
- Use "common pitfall" instead of "anti-pattern" when describing human behavior
- Use "better approach" instead of "good pattern"

## Design System
- **Theme:** "The Scholarly Leader" — deep navy accents, white backgrounds, serif body text
- **Fonts:** Lora (serif, body text) + Inter (sans-serif, headings/UI) via Google Fonts
- **Colors:** Navy #070D4A (accent), #1D2D35 (text), #3546E5 (links), white backgrounds
- **Dark mode:** Supported via data-theme attribute on html element, toggled with localStorage
- **Layout:** Max content width 720px, page width 960px, generous line-height (1.8)
- **No emojis in prose** — only in path card icons and tip boxes

## File Structure
```
multiplier-playbook/
  index.html                  — Home page with "Choose Your Path" grid
  foundations.html             — Mindshift, Problem Solving, Decisions, Time Management, Self-Awareness, Personality Types
  communication-change.html   — Pyramid Principle, Executive Presence, Managing Up, Influence Without Authority, Driving Change, Status Quo, Written Artifacts
  first-90-days.html          — Listen/Learn/Act framework, Week 1 Essentials, Common Traps (standalone page)
  technical-excellence.html   — Clean Code (multi-language), Standards, Testing, Observability, Security, Tooling
  people-culture.html         — Delegation, Mentoring, Feedback, Ownership, Huddles, Hard Conversations, Hiring, Feedback Tracking, Underperformance, 1:1s
  team-health.html            — Psychological Safety, Remote Leadership, Burnout Prevention, Conflict Mediation (standalone page)
  delivery-execution.html     — Delivery, Incidents, Tech Debt, Stakeholders, Expectations, DORA Metrics, Estimation, Planning Artifacts
  resources.html              — Books, videos, podcasts, blogs, communities, framework quick-reference
  self-assessment.html        — Interactive checklist with localStorage persistence
  css/
    styles.css                — Shared design system
  js/
    script.js                 — Shared interactivity (theme, accordion, tabs, checklist persistence)
  CLAUDE.md                   — This file
```

## Key CSS Classes
- `.framework` — blue-bordered box for named frameworks and step-by-step processes
- `.key-insight` — replaces "truth bomb", blue accent, for important reflections
- `.tip` — green-tinted box with icon for practical advice (variants: .warning-tip, .info-tip, .purple-tip)
- `.pitfall` / `.better` — red/green comparison grid for "watch out for" vs "try this instead"
- `.checklist` — interactive checkbox lists with localStorage persistence
- `.accordion` — expandable sections for detailed content
- `.comparison` — side-by-side comparison tables
- `.card-grid` / `.card` — content cards in responsive grids
- `.page-toc` — in-page table of contents at top of each content page
- `.path-card` — home page navigation cards

## Content Themes (What Engineering Leaders Need to Learn)
1. **IC to Leader mindshift** — from doing to enabling
2. **Problem-solving thinking** — root cause analysis, 5 Whys, prioritisation
3. **Decision making** — one-way/two-way doors, time-boxing, facilitating discussions
4. **Time management** — the 40/30/20/10 guideline, protecting leadership time
5. **Self-awareness & emotional regulation** — managing your own triggers, the Pause Protocol
6. **Understanding personality types** — 4 communication styles (Analytical/Driver/Connector/Supporter), adapting delegation and feedback
7. **First 90 days** — listen, learn, act framework for new leaders (standalone page)
8. **Structured communication** — Pyramid Principle, MECE, SCR, Issue-Impact-Action
9. **Managing up** — no surprises, recommendations not problems, predictability
10. **Influence without authority** — 4 currencies of influence, cross-team collaboration
11. **Driving change** — understanding why people don't change (overload, clarity, confidence, motivation, habit, disagreement)
12. **Written artifacts** — design docs, RFCs, ADRs, how to write and review them
13. **Clean code & standards** — modern language features (multi-language), MR reviews as teaching, design principles
14. **Testing** — systemic approach to preventing bugs, not just "be more careful"
15. **Security mindset** — threat modeling, OWASP, dependency scanning, secure-by-default
16. **Mentoring** — asking prompting questions instead of giving answers, growth check-ins
17. **Feedback** — Radical Candor framework, SBI model, frequent informal feedback
18. **Ownership** — "it's everyone's code", finishing what you start, peer accountability
19. **Dev huddles** — making sure all voices are heard, not just the loudest
20. **Running effective 1:1s** — 3-part structure, cadence by person, questions that unlock real conversations
21. **Hiring & onboarding** — evaluating beyond technical skills, the first 90 days framework
22. **Navigating underperformance** — escalation path, diagnosing skill/motivation/clarity/fit gaps
23. **Psychological safety** — Edmondson's research, 5 daily practices, signs of safety vs fear
24. **Remote & distributed leadership** — async-first, timezone awareness, combating isolation
25. **Burnout recognition & prevention** — early warning signs, sustainable pace, leader self-care
26. **Conflict mediation** — 5-step mediation framework, when to step in vs let it resolve
27. **Delivery** — sprint hygiene, the 30% rule for risk, "almost done" checks
28. **Incidents** — severity assessment, blameless post-mortems, safety nets
29. **Stakeholder communication** — translating tech to business, the "no surprises" rule
30. **Setting expectations** — defining "meets" vs "exceeds", evidence-based assessment
31. **Engineering metrics** — DORA metrics, introducing metrics without fear, tracking trends
32. **Estimation** — reference stories, planning poker, spike rule, 1.5x buffer
33. **Planning artifacts** — showcase decks, release plans, Gantt charts, story parallelisation
34. **Challenging the status quo** — questioning processes, leveraging AI, continuous improvement
35. **Learning culture** — "learn and teach" contracts, "show me in code" challenges

## Tech Stack Context (for examples in content)
Examples in the content reference: Java (modern features up to Java 25), Spring Boot, Angular, PostgreSQL, MongoDB, Kubernetes, AWS, Terraform, Docker, GitLab CI, Grafana, Prometheus, Kibana, Claude AI. These are illustrative examples, not mandates for a specific team.
