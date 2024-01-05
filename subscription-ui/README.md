# subscription-ui

The TIKI Subscription Builder is an innovative application built with Vue.js 3, enabling users to independently query and purchase data with just a few clicks.

Users can freely search and navigate through TIKI Data to experience its robustness, exploring sample data and statistics for any query they wish to consult.

To run the project for local development, simply follow the instructions below.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Deployment

The project is built as a static site and deployed to Cloudflare Pages: https://tiki-subscription-builder.pages.dev

To deploy manually, a simple `npm run deploy` can be used to trigger a direct upload using the wrangler CLI.

For CI/CD, a GitHub Actions workflow handles this for all pull requests and pushes to main.
