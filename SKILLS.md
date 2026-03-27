# Installed Skills

This document records all skills installed in this project and how to use them.

## ui-ux-pro-max

### Source
- **Upstream repository**: `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill`
- **Installed location**: `.claude/skills/ui-ux-pro-max`
- **Supporting assets**: `.claude/src/ui-ux-pro-max`

### What it does
Provides searchable UI/UX design intelligence via a local Python CLI:
- 161 reasoning rules for product types
- 67 UI styles (glassmorphism, minimalism, brutalism, etc.)
- 161 color palettes
- 57 font pairings
- 25 chart types
- 99 UX guidelines (accessibility, touch targets, animation, etc.)
- 13 tech stacks

Uses BM25 ranking over CSV knowledge bases to search by domain and generate complete design systems.

### Installation structure
The skill depends on symlinks:
```
.claude/skills/ui-ux-pro-max/
├── SKILL.md
├── data -> ../../src/ui-ux-pro-max/data
└── scripts -> ../../src/ui-ux-pro-max/scripts

.claude/src/ui-ux-pro-max/
├── data/
│   ├── styles.csv
│   ├── colors.csv
│   ├── typography.csv
│   ├── ux-guidelines.csv
│   ├── products.csv
│   ├── landing.csv
│   ├── ui-reasoning.csv
│   └── ... (more CSVs)
└── scripts/
    ├── search.py
    ├── design_system.py
    └── core.py
```

**Important**: When copying this project to another machine, ensure both directories exist. The symlinks must resolve correctly.

### Prerequisites
Python 3.x is required. Check with:
```bash
python3 --version
```

### Usage

#### Generate complete design system (recommended)
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system -p "Project Name"
```

Example for this portfolio:
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "designer portfolio" --design-system --format markdown -p "Evey Portfolio"
```

#### Search specific domains
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain>
```

Available domains:
- `product` - Product type recommendations (SaaS, e-commerce, portfolio, etc.)
- `style` - UI styles, colors, effects (glassmorphism, minimalism, dark mode, etc.)
- `typography` - Font pairings (elegant, playful, professional, modern)
- `color` - Color palettes by product type
- `landing` - Page structure, CTA strategies
- `chart` - Chart types, library recommendations
- `ux` - Best practices, anti-patterns (animation, accessibility, etc.)
- `google-fonts` - Individual Google Fonts lookup
- `react` - React/Next.js performance tips
- `web` - App interface guidelines

Examples:
```bash
# Find suitable styles for portfolio
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "minimal creative" --domain style

# Get typography recommendations
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "designer brand portfolio" --domain typography

# Check UX guidelines
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "animation accessibility" --domain ux

# Get color palette suggestions
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "portfolio creative" --domain color
```

### Sample output for this project
For query `designer portfolio`, the skill suggested:
- **Pattern**: Portfolio Grid
- **Style**: Motion-Driven (animation-heavy, microinteractions, smooth transitions)
- **Typography**: Archivo (heading) + Space Grotesk (body)
- **Colors**: Blue accent (#2563EB) on neutral background (#F8FAFC)
- **Key effects**: Scroll animations, hover transitions (300-400ms), parallax
- **Anti-patterns**: Corporate templates, generic layouts

### Important notes
- The installed `SKILL.md` emphasizes React Native in some sections, but the actual data includes React/Next.js/web guidance
- CLI currently reports `--stack {react-native}` only, though broader stack support exists in the data
- Best fit for this repo: use as reference for portfolio UI direction, typography, color, accessibility, motion, and UX review
- Always validate framework-specific advice against this project's actual stack (Next.js 16 + React 19)

### Verification
The skill was successfully tested in this repo with:
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "designer portfolio" --design-system --format markdown -p "Evey Portfolio"
```
