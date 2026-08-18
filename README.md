This is the DELiBRiX website built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting Started

1. Install dependencies.

```bash
npm install
```

2. Create a local environment file from the example.

```bash
cp .env.example .env.local
```

3. Fill in SMTP credentials in `.env.local` so the contact form can send email.

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL` (defaults to `contact@delibrix.com` in the API route)

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The contact form posts to `POST /api/contact` and sends mail through Nodemailer.

## Build and Lint

```bash
npm run lint
npm run build
```

## Deploy on Vercel

Set the same SMTP environment variables in your deployment platform before publishing.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
