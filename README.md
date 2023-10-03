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

This workshop has 16 small chapters and 23 branches.

Go through the workshop by checking out the first branch **`git checkout 001-default-form-example`** and continue from there.

The branch names are numbered form `001`-... to `023`-....

So with tab completion on your terminal you can just type the next number and easily checkout the next branch without having to type the whole name of the next branch.

<a href="https://en.wikipedia.org/wiki/Command-line_completion" target="_blank">https://en.wikipedia.org/wiki/Command-line_completion</a>

Start here.

**`git checkout 001-default-form-example`**

## 2.0 Default Form Example

Let's have a quick look at what a default form with `POST` as `method` does in the browser.

1. drag the `index.html` file in a browser tab, I am using Chrome.
2. open Developer Tools in Chrome
3. go to the Network tab in Developer Tools
4. submit the form
5. in the Developer Tools in the Network tab, click on index.html
6. click on Payload
7. find the submitted form values

<img src="/default-form/img/default-form-payload-values.png">

Checkout the next branch to continue.

**`git checkout 002-create-and-install-sveltekit`**

## 3.0 Create and Install SvelteKit

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

Checkout the next branch to continue.

**`git checkout 003-tour-of-sveltekit`**

## 4.0 Tour of SvelteKit

Let's run SvelteKit and explore a little bit..

`npm run dev`

`pnpm dev`

Go to `http://localhost:5173/` in your browser.

<img src="/sveltekit/static/default-sveltekit-start.png">

In the directory `sveltekit/src/routes` open the `+page.svelte` file.

**sveltekit/src/routes/+page.svelte**

```html
<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the
  documentation
</p>
```

Add `<h2>Hello Everyone</h2>` under the `p` element.

**sveltekit/src/routes/+page.svelte**

```html
<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the
  documentation
</p>

<h2>Hello Everyone</h2>
```

While doing so keep the browser tab with SvelteKit running in it open and observe that any changes you make to the `+page.svelte` file are immediately shown.

Right now you are on the `index route` or `Home page` of your SvelteKit project.

<img src="/sveltekit/static/sveltekit-index-route.png">

As you can see there is a `routes` folder.

Folders and files **inside** this `routes` folder determine the **structure** of your SvelteKit app.

Web pages in SvelteKit are created with `+page.svelte` files.

Checkout the next branch to continue.

**`git checkout 004-add-styles-to-index-page`**

Web pages in SvelteKit are created with `+page.svelte` files.

Let's style the index page a little bit.

Open a `style` element under the `h2` element and style the page to your liking, I have added these styles.

**sveltekit/src/routes/+page.svelte**

```html
<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the
  documentation
</p>

<h2>Hello Everyone</h2>

<style>
  h1 {
    color: orange;
    font-size: 3rem;
  }
  h2 {
    color: cornflowerblue;
    font-size: 2rem;
  }
  p {
    font-size: 1.4rem;
  }
</style>
```

<img src="/sveltekit/static/sveltekit-style-index-page.png">

Checkout the next branch to continue.

**`git checkout 005-create-global-styles`**
