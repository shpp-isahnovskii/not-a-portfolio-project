# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
yarn install
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn run dev
```

## Production

```bash
yarn run deploy
```
For first time adding to the remote I've used this instruction:

1. Install dev dependency `gh-pages`
2. Add the script `"deploy": "gh-pages -d <dist>"` in package.json file, `<dist>` - .output/public
3. Specify app baseURL in nuxt.config.ts.
4. Generate with `yarn run generate`
5. (optional) If have no remote `git remote -v`, set with `git remote add origin <url>` where `<url>` - your repository url name
6. Deploy with `yarn run deploy`

Locally preview production build:

```bash
yarn run preview
```