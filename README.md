# Next.js Sanity Blog

A production-ready headless blog built with **Next.js (App Router)**, **TypeScript**, and **Sanity CMS**.

This project demonstrates modern front-end architecture patterns, hybrid rendering strategies (SSR, SSG, ISR), preview mode implementation, structured SEO, automated testing, and performance optimization aligned with Core Web Vitals.

---

## 🚀 Tech Stack

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Sanity (Headless CMS)**
- **Incremental Static Regeneration (ISR)**
- **Playwright (E2E Testing)**
- **Vercel (Deployment)**
- **ESLint + Prettier**

---

## 🏗 Architecture Overview

This project follows a component-based architecture and API-driven content strategy.

### Key Architectural Decisions

- Headless CMS for content flexibility and scalability
- Hybrid rendering model (SSR + SSG + ISR)
- Separation of concerns (UI / Data / Services)
- Environment-based configuration
- Optimized asset handling using `next/image`
- Structured metadata generation per page

---

## 🔄 Rendering Strategy

| Page Type        | Strategy |
|------------------|----------|
| Homepage         | Static Site Generation (SSG) |
| Blog Listing     | Static Site Generation (SSG) |
| Blog Post        | SSG + ISR (`revalidate`) |
| Search           | Server-Side Rendering (SSR) |
| Draft Preview    | Dynamic Rendering |

This approach ensures optimal performance while maintaining dynamic capabilities when required.

---

## ✨ Features

- Dynamic blog post pages
- Portable Text rendering
- Preview mode for draft content
- Structured SEO (Open Graph + JSON-LD)
- Sitemap and robots.txt
- Optimized images and lazy loading
- Performance-first configuration
- Accessibility-focused implementation
- End-to-end testing with Playwright

---

## 🔍 SEO Implementation

- Dynamic `generateMetadata`
- Open Graph and Twitter cards
- Canonical URLs
- Structured Data (JSON-LD)
- Automated sitemap generation

---

## 📈 Performance Goals

- Lighthouse Performance: **95+**
- SEO Score: **100**
- Accessibility: **95+**
- Core Web Vitals optimized

---

## 🧪 Testing

End-to-end tests implemented using **Playwright** to validate:

- Homepage load
- Blog navigation
- Post rendering
- Preview mode behavior
- Metadata correctness

Run tests with:

```bash
npm run test

## ⚙️ Environment Setup

Create a .env.local file:

NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_TOKEN=
NEXT_PUBLIC_SITE_URL=

## 📂 Project Structure
/app
/components
/lib
/services
/types
/utils