@AGENTS.md

# Project guide for future Claude sessions

This repository is a personal portfolio site for **Evey**. The goal of this file is to make the project portable so Claude can continue development on a new Windows or macOS machine immediately after the repo is cloned.

## Project summary
- Stack: Next.js 16 App Router + React 19 + TypeScript + Tailwind CSS v4
- Deployment target: GitHub Pages
- Site type: static export only in the current version
- Current site language: primarily Chinese with some English section labels
- Current content is still placeholder portfolio content and should be replaced later with real profile/work/contact data

## Environment requirements
Install these before working on the project:
- Node.js **22.x** recommended
- npm **10+** recommended
- git
- Claude Code

Optional but useful:
- GitHub CLI (`gh`) for easier repo / workflow inspection
- VS Code or another editor

## Cross-platform notes
- The project should work on both Windows and macOS after `npm install`
- Use forward slashes in commands when possible inside Claude Code
- On Windows, use `set BASE_PATH=/repo-name && npm run build` in cmd or `$env:BASE_PATH='/repo-name'; npm run build` in PowerShell if testing repo-subpath builds manually
- On macOS/Linux, use `BASE_PATH=/repo-name npm run build`

## First-time setup on a new computer
After cloning the repo, run:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

For production build verification:

```bash
npm run build
```

The static export output will be generated in:

```text
out/
```

## Important project structure
Main files Claude should know first:

- `app/page.tsx`
  - Main one-page portfolio UI
  - Contains in-file data arrays for nav links, works, skills, and experience
  - Also contains the local `SectionHeading` component
- `app/layout.tsx`
  - Root layout, metadata, language, and font setup
- `app/globals.css`
  - Global theme tokens and custom visual classes
  - Includes `hero-glow`, `hero-ribbon-*`, `profile-arc`, `profile-badge`, `gold-corner`
- `next.config.ts`
  - Static export config for GitHub Pages
  - Supports `BASE_PATH` when deploying under a repo subpath
- `.github/workflows/deploy.yml`
  - GitHub Actions workflow for Pages deployment
- `public/.nojekyll`
  - Needed for GitHub Pages static asset handling
- `AGENTS.md`
  - Reminder that this Next.js version may differ from training assumptions; check local docs in `node_modules/next/dist/docs/` before making framework-sensitive changes

## Current architecture
- Single-page site using section anchors:
  - `#home`
  - `#about`
  - `#works`
  - `#skills`
  - `#experience`
  - `#contact`
- No backend
- No API routes
- No database
- No authentication
- No uploads in the current implementation
- No dynamic routing in the current implementation

This means the current deployment must remain compatible with static export.

## Deployment behavior
This repo is configured for GitHub Pages.

### Current deployment flow
- Push to `main`
- GitHub Actions runs `.github/workflows/deploy.yml`
- Workflow installs dependencies, builds the static export, and deploys `out/` to Pages
- If `public/CNAME` exists, the workflow builds for a custom domain root path
- If `public/CNAME` does not exist, the workflow builds with the GitHub Pages repo base path

### Current custom domain
- Active custom domain: `evey.site`
- Domain file: `public/CNAME`
- Current expectation for custom-domain builds: asset URLs must resolve from root, not from `/evey_personal`

### Known custom-domain bug that was fixed
A previous deployment served HTML on `evey.site` with CSS/JS asset URLs prefixed by `/evey_personal/...`.
That caused styles and scripts to 404 on the custom domain and made the page look broken.

Fix applied:
- added `public/CNAME` with `evey.site`
- updated `.github/workflows/deploy.yml` so when `public/CNAME` is present, the site builds without `BASE_PATH`

If this bug appears again, first inspect the deployed HTML and confirm whether asset URLs incorrectly start with `/evey_personal/`.

### How `BASE_PATH` works
`next.config.ts` reads `process.env.BASE_PATH`, but only uses it if it starts with `/`.

That behavior is important because:
- standard GitHub Pages repo URL deployments need a repo path like `/evey_personal`
- custom domain deployments usually need root path behavior with no repo prefix

### If using default GitHub Pages URL
Example:

```text
https://wangcxin.github.io/evey_personal/
```

Then build/test with:

```bash
BASE_PATH=/evey_personal npm run build
```

### If using a custom domain
Example:

```text
https://evey.site/
```

Then the build should usually use no `BASE_PATH` so asset URLs resolve from the domain root.

Important: the current workflow already handles this automatically by checking whether `public/CNAME` exists.

If custom-domain support is being adjusted, verify both:
- local dev rendering
- exported `out/` asset paths
- deployed Pages URLs

## Recommended verification steps before and after changes
Use this checklist after UI or config changes:

1. Run local dev server
   ```bash
   npm run dev
   ```
2. Verify desktop + mobile layout
3. Check anchor navigation for all sections
4. Run lint if relevant
   ```bash
   npm run lint
   ```
5. Run production build
   ```bash
   npm run build
   ```
6. If testing repo-subpath deployment manually, run a build with `BASE_PATH=/evey_personal`
7. Confirm `out/` is generated successfully

## Working conventions for Claude
- Prefer editing existing files over creating new ones
- Keep the current visual style unless the user asks for a redesign
- Do not introduce backend-only features unless the deployment target changes away from GitHub Pages
- If a requested feature requires uploads, private downloads, auth, or server-side logic, call that out explicitly because GitHub Pages will not be enough
- For Next.js behavior changes, read the local docs in `node_modules/next/dist/docs/` first
- Keep solutions simple; this project is currently a lightweight static portfolio

## Content status
The current page still uses placeholder content in several places, including:
- portfolio project cards
- work experience company names
- contact email
- social labels

If the user asks to make the site real, the likely next edits are in `app/page.tsx`.

## Typical commands Claude can use
Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Build static export:

```bash
npm run build
```

Build for repo-subpath Pages testing on macOS/Linux:

```bash
BASE_PATH=/evey_personal npm run build
```

## If Claude is starting fresh on another machine
Good first checks:
1. Read `CLAUDE.md`
2. Read `AGENTS.md`
3. Read `package.json`
4. Read `next.config.ts`
5. Read `app/page.tsx`
6. Read `app/layout.tsx`
7. Read `app/globals.css`
8. If deployment work is involved, read `.github/workflows/deploy.yml`

## Repo identity
- Repository: `WangCXin/evey_personal`
- Default branch: `main`
- Current deployment target: GitHub Pages
