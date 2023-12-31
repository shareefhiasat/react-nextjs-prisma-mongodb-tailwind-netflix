## Thanks to Code With Antonio
[@codewithantonio](https://www.youtube.com/@codewithantonio)

## Reference from video i did

### command in terminal

- npx create-next-app --typescript --info
- did not include route or app or src folders all are No
- setup tailwind -D dependency on development level: and initialize config file
  ```
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
- install prisma

```
npm install -D prisma
npx prixma init
npm install @prisma/client
```

- After adding the mode - sync to mongodb to collection configured in .env

```
npx prisma db push
```

- install next-auth and bcrypt

```
npm install next-auth
npm install bcrypt
```

```
 to fix gitignore on .env
 git rm --cached .env

 npm i axios

 npm install react-icons

 npm i @next-auth/prisma-adapter

 npm i swr

 npm i lodash
 npm i -D @types/lodash

 npm install zustand
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
