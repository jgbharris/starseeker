https://github.com/user-attachments/assets/99877ad8-5ddf-4d74-a074-26ebc30ac638

# Star seeker

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Add .env file in root directory and add NEXT_PUBLIC_API_KEY.

## App features

Gate list - I moved this to its own "gates info" page rather than home page, aware this is contrary to the briefing document but thought it was better UI.

Journey cost page - Section 2 of briefing document

Gate details page - Section 3 of briefing document

Cheapest route page - Section 4 of briefing document

## Approach

I have used CSS modules for styling.

I used the fetch API for api requests.

In terms of order I completed the section 3 first, then 2 and then 4.

This made more sense to me as code between sections 2 and 4 were reusable.
