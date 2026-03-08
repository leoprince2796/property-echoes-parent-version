# Property Echoes

A UK-based real estate information and lead generation platform built with Next.js 15.

## Project Structure

The application lives in `leadform-trial-main/property-echoes/`.

```
leadform-trial-main/property-echoes/
├── src/app/                    # Next.js App Router pages
│   ├── page.js                 # Homepage
│   ├── category/[slug]/        # Category listing pages
│   ├── category/[slug]/[postslug]/  # Individual blog post pages
│   └── api/submit-lead/        # Lead capture API route
├── components/                 # Reusable React components
│   └── LeadForm.jsx            # Lead capture form (connects to Firebase)
├── content/
│   ├── posts.json              # Blog posts data
│   └── categoryContent.js      # Category metadata and SEO config
├── src/lib/                    # Utilities (Firebase config, JSON parsing)
├── public/                     # Static assets
├── next.config.mjs             # Next.js configuration
└── package.json
```

## Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Frontend**: React 19, Tailwind CSS, Sass
- **Backend/DB**: Firebase Firestore (lead storage), local JSON files (content)
- **Icons**: FontAwesome, React Icons
- **Content**: marked (Markdown), html-react-parser, sanitize-html

## Running the App

The workflow `Start application` runs:
```
cd leadform-trial-main/property-echoes && npm run dev
```
This starts the Next.js dev server on port 5000, accessible on the Replit preview.

## Key Features

- Content hub with blog posts on UK property topics
- Lead capture form storing data in Firebase Firestore
- SEO-optimized pages with JSON-LD schema
- Permanent redirects for legacy URL support
- Dynamic routing for categories and individual posts
