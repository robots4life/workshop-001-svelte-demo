# SvelteKit Workshop @ Liip Zurich Switzerland 2023-09-29

Location
**<a href="https://www.liip.ch/en" target="_blank">https://www.liip.ch/en</a>**

Event
**<a href="https://www.meetup.com/sveltesocietyzurich/events/295819937/" target="_blank">https://www.meetup.com/sveltesocietyzurich/events/295819937/</a>**

Repository
**<a href="https://github.com/robots4life/workshop-001-svelte-demo" target="_blank">https://github.com/robots4life/workshop-001-svelte-demo</a>**

## 1.0 Download ZIP file or Clone Repository

Download ZIP file  
`https://github.com/robots4life/talk-001-get-post-svelte-kit-server/archive/refs/heads/master.zip`

Clone Repository  
`git clone https://github.com/robots4life/workshop-001-svelte-demo.git`

`gh repo clone robots4life/workshop-001-svelte-demo`

## 2.0 Default Form Example

**`git checkout 001-default-form-example`**

Let's have a quick look at what a default form with `POST` as `method` does in the browser.

1. drag the `index.html` file in a browser tab, I am using Chrome.
2. open Developer Tools in Chrome
3. go to the Network tab in Developer Tools
4. submit the form
5. in the Developer Tools in the Network tab, click on index.html
6. click on Payload
7. find the submitted form values

<img src="/default-form/img/default-form-payload-values.png">

## 3.0 Create and Install SvelteKit

**`git checkout 002-create-and-install-sveltekit`**

Let's create and install SvelteKit.

**Create**

`npm create svelte@latest`

`pnpm create svelte@latest`

1. current directory
2. Skeleton Project
3. TypeScript
4. ESLint & Prettier

```bash
create-svelte version 5.1.0

┌  Welcome to SvelteKit!
│
◇  Where should we create your project?
│    (hit Enter to use current directory)
│
◇  Which Svelte app template?
│  Skeleton project
│
◇  Add type checking with TypeScript?
│  Yes, using TypeScript syntax
│
◇  Select additional options (use arrow keys/space bar)
│  Add ESLint for code linting, Add Prettier for code formatting
│
└  Your project is ready!

✔ Typescript
  Inside Svelte components, use <script lang="ts">

✔ ESLint
  https://github.com/sveltejs/eslint-plugin-svelte

✔ Prettier
  https://prettier.io/docs/en/options.html
  https://github.com/sveltejs/prettier-plugin-svelte#options

Install community-maintained integrations:
  https://github.com/svelte-add/svelte-add

Next steps:
  1: npm install (or pnpm install, etc)
  2: git init && git add -A && git commit -m "Initial commit" (optional)
  3: npm run dev -- --open

To close the dev server, hit Ctrl-C

Stuck? Visit us at https://svelte.dev/chat
```

**Install**

`npm install`

`pnpm install`
