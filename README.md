# Bhuvnesh Verma — Portfolio CV

A modern, responsive portfolio website built with **Next.js 15**, **React 19**, and **Tailwind CSS** to present experience, projects, skills, education, and professional links in a clean CV-style layout.

## Highlights

- Responsive portfolio UI with dedicated desktop sidebar and mobile layout
- Structured sections for About, Skills, Experience, Tech Stack, Projects, Education, Recognition, Recommendations, and Links
- Downloadable CV support
- SEO-friendly metadata setup for better discoverability
- Component-driven architecture for easy customization

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI:** React, Tailwind CSS, Radix UI, shadcn/ui components
- **Icons & Motion:** lucide-react, motion

## Project Structure

```text
app/                    # Next.js app routes and layout
components/
  portfolio/            # Portfolio page sections and composition
  ui/                   # Reusable UI primitives
lib/                    # Metadata and utility modules
public/                 # Static assets (images, icon, PDF CV)
```

## Getting Started

### 1) Install dependencies

```bash
pnpm install
```

### 2) Start development server

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
pnpm dev     # Run local development server
pnpm build   # Build for production
pnpm start   # Start production server
pnpm lint    # Run lint checks
```

## Customization

- Update portfolio content in `/home/runner/work/cv/cv/components/portfolio/`
- Update SEO metadata in `/home/runner/work/cv/cv/lib/metadata.ts`
- Replace images/CV files in `/home/runner/work/cv/cv/public/`

## Deployment

This project is ready for deployment on platforms like **Vercel**. Build command:

```bash
pnpm build
```
