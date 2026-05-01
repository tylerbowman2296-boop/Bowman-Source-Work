# Bowman's Source Work Website

Official one-page website for Bowman's Source Work, a website design and website care company in Anderson, South Carolina.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Check Before Deploying

```bash
npm run lint
npx tsc --noEmit
npm run build
npm audit
```

## Edit Site Content

Most business content is in `lib/constants.ts`:

- Business name, email, phone, location, and tagline
- Services, website care checklist, process steps, pricing, demo projects, FAQs, and contact dropdown options

Main sections are in `components/`. The homepage layout is in `app/page.tsx`.

## Edit Assets

- Full logo used in the header and footer: `public/bowmans-source-work-logo.png`
- Brand mark used in preview visuals and icons: `public/bowmans-source-work-mark.png`
- Founder photo: `public/tyler-bowman.jpeg`
- Site icons: `app/icon.png` and `app/apple-icon.png`

## Contact Form

The form in `components/Contact.tsx` currently opens a prepared email to `contact@bowmansourcework.com`, so it works without a backend.

To use a real form service later, connect the submit handler to Formspree, a Resend-powered Next.js route handler, or another Vercel-compatible form handler.

## Deploy To Vercel

1. Push this project to GitHub.
2. Go to Vercel and choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the framework preset as **Next.js**.
5. Use the default build command: `npm run build`.
6. Deploy.

The production metadata is currently set in `app/layout.tsx` as `https://bowmans-source-work.vercel.app`. Update `metadataBase`, Open Graph URLs, and any domain text after the custom domain is connected to this project.
