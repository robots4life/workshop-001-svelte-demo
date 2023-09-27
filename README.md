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

## 4.0 Tour of SvelteKit

**`git checkout 003-tour-of-sveltekit`**

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

**`git checkout 004-add-styles-to-index-page`**

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

**`git checkout 005-create-global-styles`**

Let's add some default global styles to your app.

Create the file `app.css` in the `sveltekit/src/` folder.

**sveltekit/src/app.css**

```css
/* https://andy-bell.co.uk/a-modern-css-reset/ START */
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
/* https://andy-bell.co.uk/a-modern-css-reset/ END */

html {
  background-color: #002244;
  color: blanchedalmond;
}

body {
  padding: 2rem;
}

body,
form,
input,
button,
a {
  font-family: sans-serif;
  font-size: 1.6rem;
}
a {
  color: whitesmoke;
}
a:hover {
  color: green;
}
```

For the styles to apply globally to your app you are going to use a `+layout.svelte` file.

<a href="https://learn.svelte.dev/tutorial/layouts" target="_blank">Reference -> https://learn.svelte.dev/tutorial/layouts</a>

Create the file `+layout.svelte` in the `sveltekit/src/routes` folder.

At the top of the file create a `script` element and import the `app.css` file.

Last not least create a `slot` element, this will render all the pages under this layout and apply the global styles.

**sveltekit/src/routes/+layout.svelte**

```ts
<script lang="ts">
    // import your global CSS
	import '../app.css';
</script>

<slot />
```

<img src="/sveltekit/static/sveltekit-global-styles-with-layout.png">

**`git checkout 006-create-pages`**

Let's add a few pages to your app.

Routes or locations, i.e. `example.com`**/about**, `example.com`**/work**, `example.com`**/contact** of your SvelteKit app are created with folders inside the `routes` folder.

Create the file `+page.svelte` in the `sveltekit/src/routes/about` folder.

Create a link to the `index` page on the `about` page.

**sveltekit/src/routes/about/+page.svelte**

```html
<a href="/">Home</a>
<hr />

<h1>About</h1>

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi asperiores
  dolores, quos ducimus aspernatur ex doloribus. Aut illo in non?
</p>
```

Create the file `+page.svelte` in the `sveltekit/src/routes/contact` folder.

Create a link to the `index` page on the `contact` page.

**sveltekit/src/routes/contact/+page.svelte**

```html
<a href="/">Home</a>
<hr />

<h1>Contact</h1>

<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem dolorum
  eveniet aperiam. Nostrum laudantium minus facilis reiciendis tempora similique
  suscipit repellat a eos recusandae. Modi, excepturi officiis sit voluptatum
  recusandae facere et quam inventore aspernatur aut quo, doloribus placeat eius
  accusantium ex similique vero optio fugiat totam eos a hic.
</p>
```

Create a link to the `about` page on the `index` page.

Create a link to the `contact` page on the `index` page.

**sveltekit/src/routes/+page.svelte**

```html
<a href="/about">About</a>
<a href="/contact">Contact</a>
<hr />

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
