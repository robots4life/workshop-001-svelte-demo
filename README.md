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

```html
<script lang="ts">
  // import your global CSS
  import "../app.css";
</script>

<slot />
```

<img src="/sveltekit/static/sveltekit-global-styles-with-layout.png">

Checkout the next branch to continue.

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

Checkout the next branch to continue.

**`git checkout 007-create-navigation-component`**

Instead of having the link to the `index`, `about` and `contact` page inside the markup for those pages you can use a `Navigation` component.

Let's create your first component.

Create the file `Navigation.svelte` in the `sveltekit/src/lib/components` folder.

**sveltekit/src/lib/components/Navigation.svelte**

```html
<a href="/">Home</a>
<a href="/about">About</a>
<a href="/contact">Contact</a>
<hr />
```

Now to add your `Navigation` component to your app you can either add it to each `+page.svelte` file of each page or use the `+layout.svelte` file where you already added the global styles.

To use your `Navigation` component you import it from the folder where you created it.

**sveltekit/src/routes/+layout.svelte**

```html
<script lang="ts">
  // import your global CSS
  import "../app.css";

  // import your Navigation component
  import Navigation from "$lib/components/Navigation.svelte";
</script>

<Navigation />
<slot />
```

Make sure to remove the hard coded anchor elements from the `index`, `about` and `contact` page.

Checkout the next branch to continue.

**`git checkout 008-loading-data-for-pages`**

## 5.0 Loading Data for Pages

You already have a few pages up and running, nice. :tada:

Let's have a look at how data for these pages can be loaded into them.

<a href="https://learn.svelte.dev/tutorial/page-data" target="_blank">Reference -> https://learn.svelte.dev/tutorial/page-data</a>

For now you are going to use a `+page.server.ts` file to load data for a page.

You could also use a `+page.ts` file however this would involve touching on advanced topics that you can explore later on.

For the time being, let's just say that the default file to use for loading data into a page is a `+page.server.ts` file.

Create the file `+page.server.ts` in the `sveltekit/src/routes/about` folder.

**sveltekit/src/routes/about/+page.server.ts**

```ts
// use a load function to load data for the page
export const load = () => {
  // return data from the load function in an object
  return { hello: "world" };
};
```

To display the loaded data for the page you need a `data` property on the page.

The loaded data for the page is passed to the page inside this `data` property.

At the top of the file create a `script` element.

Inside the `script` element you `export` the `data` property that is passed from the `load` function.

**sveltekit/src/routes/about/+page.svelte**

```html
<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<pre>{JSON.stringify(data, null, 2)}</pre>

<h1>About</h1>

<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi asperiores
  dolores, quos ducimus aspernatur ex doloribus. Aut illo in non?
</p>
```

Go to your `about` page and admire the data you have just loaded into the page. :tada: :heart: :rocket:

<a href="http://localhost:5173/about" target="_blank">http://localhost:5173/about</a>

<img src="/sveltekit/static/sveltekit-about-page-load-data.png">

Checkout the next branch to continue.

**`git checkout 009-work-with-loaded-data-in-page-markup`**

## 6.0 Work with Loaded Data in Page Markup

Let's have a look at how you can work with the loaded data in a page.

Currently in the `+page.svelte` file for your `about` page you are rendering the `data` object that is passed from the `load` function in a `pre` element.

However there is nicer ways to display the data inside the `data` property.

Make sure to understand that you can work with this `data` object in any way possible with JavaScript.

Change the returned data in the `load` function to this.

You are now also using the correct type for the `load` function.

**sveltekit/src/routes/about/+page.server.ts**

```ts
// import the type for the load function
import type { PageServerLoad } from "./$types";

// use a load function to load data for the page
export const load: PageServerLoad = () => {
  // return data from the load function in an object
  return { intro: "Welcome to the SvelteKit Workshop @ Liip. :)" };
};
```

Change the markup for the `about` page to this.

To use data in the page markup simply use curly brackets `{}` and reference the `data` object with any properties that it may have.

**sveltekit/src/routes/about/+page.svelte**

```html
<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<h1>About</h1>

<p>{data.intro}</p>
```

<img src="/sveltekit/static/sveltekit-about-page-load-data-use-markup.png">

Again, go to your `about` page and admire the data you have just loaded into the page and are using inside curly brackets in your page markup. :tada: :muscle: :sunglasses: :cool:

<a href="http://localhost:5173/about" target="_blank">http://localhost:5173/about</a>

Checkout the next branch to continue.

**`git checkout 010-work-with-array-of-objects-in-page-markup`**

## 7.0 Work with an Array of Objects in Page Markup

Let's you have more than just a simple object that you are loading into your page.

Change the `load` function of your `about` page to this.

`crypto.randomUUID()` creates a random UUID.

<a href="https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID</a>

**sveltekit/src/routes/about/+page.server.ts**

```ts
// import the type for the load function
import type { PageServerLoad } from "./$types";

// use a load function to load data for the page
export const load: PageServerLoad = () => {
  // array of objects
  const posts = [
    {
      id: crypto.randomUUID(),
      title: "How to load data into page",
      post: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum impedit minus ea!",
    },
    {
      id: crypto.randomUUID(),
      title: "How to work with SvelteKit",
      post: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      id: crypto.randomUUID(),
      title: "How to load work with objects",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam vitae vero et alias id quas facilis tempore? Vel, omnis?",
    },
    {
      id: crypto.randomUUID(),
      title: "How to work with arrays",
      post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis, facilis expedita labore molestiae praesentium exercitationem? Similique explicabo quae error? Fugit iusto nihil eligendi.",
    },
  ];

  // return data from the load function in an object
  return { postsData: posts };
};
```

Let's quickly have a look at the returned data that is passed to your `about` page by displaying it inside a `pre` element while also using the `JSON.stringify` method to show the contents of the `data` property.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify</a>

**sveltekit/src/routes/about/+page.svelte**

```html
<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<h1>About</h1>

<pre>{JSON.stringify(data, null, 2)}</pre>
```

<img src="/sveltekit/static/sveltekit-about-page-loade-data-array-of-objects.png">

Again, go to your `about` page and enjoy.. :tada:

<a href="http://localhost:5173/about" target="_blank">http://localhost:5173/about</a>

Checkout the next branch to continue.

**`git checkout 011-use-each-block-with-array-of-objects-in-page`**

Now instead of showing the raw `postData` Svelte has a logic block you can use to iterate of an array of objects.

For this you use the `each` block Svelte provides.

<a href="https://learn.svelte.dev/tutorial/each-blocks" target="_blank">Reference -> https://learn.svelte.dev/tutorial/each-blocks</a>

Let's see how you can use an `each` block with the `postsData`.

Similar to iterating over an array with the `forEach` method you have an `element` and an `index`.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach</a>

The `element` is the current element of the array. it is that simple.

In your case it is a single `object` of the array of objects, the `postsData`.

The `index` is the index of the current element in the array, so the number of the position of the element in the array.

Let's see how this works..

The first line of the `each` block is this.

1. You open the curly brackets, then use the `each` keyword with a `#` in front of it.

2. Then you give the block the data it should iterate over.

In your case you take the `data` property that is available on the page. Remember that was passed the `postsData` array of objects to the page from the `load` function with this line in the `+page.server.ts` file for the `about` page.

**sveltekit/src/routes/about/+page.server.ts**

```ts
return { postsData: posts };
```

So this `data` property on the page has a property itself, it is `postsData`.

With the dot notation you access the property `postsData` on the `data` object.

`data.postsData`

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#accessing_properties" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#accessing_properties</a>

3. Then you use the keyword `as` and pass the `element` of the array.

4. Last not least, you can optionally provide the `index` of the array, this you do by having a comma and then the `index` keyword.

This is what the first line of the `each` block in the end looks like.

```ts
{#each data.postsData as element, index}
```

Before you work with the data inside the `each` block I recommend to the close the `each` block with `{/each}`.

```ts
{#each data.postsData as element, index}
// you have access to the postsData elements and index in here
{/each}
```

So now let's work with the `postsData` inside the `each` block.

**sveltekit/src/routes/about/+page.svelte**

```html
<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<h1>About</h1>

<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

{#each data.postsData as element, index}
<div>index: {index}</div>
<div>element : {element}</div>
{/each}
```

<img src="/sveltekit/static/sveltekit-about-page-each-block-index-element.png">

**sveltekit/src/routes/about/+page.svelte**

Just like accessed the `postsData` property of the `data ` object with dot notation when you passed it to the `each` block you can do the same inside the `each` block with each `element`.

```html
<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<h1>About</h1>

<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

{#each data.postsData as element, index}
<div>index: {index}</div>
<div>element id: {element.id}</div>
<div>element title: {element.title}</div>
<div>element post: {element.post}</div>
<hr />
{/each}
```

<img src="/sveltekit/static/sveltekit-about-page-each-block-index-element-properties.png">

If you like, of course you can use different HTML elements for the `postsData`, so a `paragraph` and a `heading` for example.

```html
{#each data.postsData as element, index}
<p>index: {index}</p>
<p>element id: {element.id}</p>
<h1>element title: {element.title}</h1>
<p>element post: {element.post}</p>
<hr />
{/each}
```

Go to your `about` page and just enjoy.. :tada: :smile: :rocket: :sunglasses:

<a href="http://localhost:5173/about" target="_blank">http://localhost:5173/about</a>

Checkout the next branch to continue.

**`git checkout 012-fetch-data-and-load-it-in-a-page`**

## 8.0 Fetch Data from a Resource and Load it into a Page

So far you have worked with data that you created on the fly on the server, the array of objects, `postsData`, in the `+page.server.ts` file of your `about` page.

Let's have a quick look how you can `fetch` data from a resource and load that into a page.

You are going to `fetch` data from <a href="https://dummyjson.com/posts" target="_blank">https://dummyjson.com/posts</a> and load it into your `contact` page.

Here is a quick recap how the `fetch` API works.

<a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/API/Response/json" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/API/Response/json</a>

Note that despite the method being named `json()`, **the result is not JSON** but is instead **the result of taking JSON as input and parsing it to produce a JavaScript object**.

**Fetch API**

```ts
async function fetchPosts() {
  // the request
  const request = await fetch("https://dummyjson.com/posts");

  // the response, turn the JSON response and parse it to a JavaScript object
  const response = await request.json();

  // return the response from the fetchPosts() function
  return { dummyJSONPostsData: response };
}
```

Create a file `+page.server.ts` in the `sveltekit/src/routes/contact` folder.

**sveltekit/src/routes/contact/+page.server.ts**

```ts
// import the type for the load function
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  // the request
  const request = await fetch("https://dummyjson.com/posts");

  // the response, turn the JSON response and parse it to a JavaScript object
  const response = await request.json();

  // return the response from the load function
  return { dummyJSONPostsData: response };
};
```

Display the loaded data on your `contact` page.

**sveltekit/src/routes/contact/+page.svelte**

```html
<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<h1>Contact</h1>

<pre>{JSON.stringify(data, null, 2)}</pre>
```

<img src="/sveltekit/static/sveltekit-contact-page-fetch-dummyjson-posts.png">

Go to your `contact` page and check out the posts you `fetch`ed from the DummyJSON API and `load`ed into your page.. :tada: :sunglasses:

<a href="http://localhost:5173/contact" target="_blank">http://localhost:5173/contact</a>

Checkout the next branch to continue.

**`git checkout 013-use-each-block-for-posts-data-on-contact-page`**

### 8.1 Use an Each block on the Contact Page for the Posts Data

Just like did on your `about` page, iterate the `dummyJSONPostsData` object with an `each` block.

**sveltekit/src/routes/contact/+page.svelte**

```html
<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<h1>Contact</h1>

<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

{#each data.dummyJSONPostsData.posts as element, index}
<p>index: {index}</p>
<p>element id: {element.id}</p>
<h1>{element.title}</h1>
<p>{element.body}</p>
<h3>posted by userId: {element.userId}</h3>
<p>tags: {element.tags.toString().replaceAll(',', ', ')}</p>
<hr />
{/each}
```

Note what is happening to the post tags.

`element.tags` is an object.

With the `toString()` method that object is turned into a string, separated by commas between each value.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString</a>

With the `replaceAll()` method each comma in the string is replaced with a comma and an extra space.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll</a>

Hence the tags display as this

```html
history, american, crime
```

as opposed to this.

```html
history,american,crime
```

<img src="/sveltekit/static/sveltekit-contact-page-dummyjson-posts-each-block.png">

**Question** : What is the important difference in the `load` function of your `about` page and your `contact` page ?

**Answer** : You are making the `load` function of your `contact` page asynchronous by prefixing it with the `async` keyword and using `await` to wait for the `fetch` request to complete as well as for the parsing, `.json()`, of the JSON data into a JavaScript object. This is the case because the resource is an API online and not an in-memory data structure that you work with on disk. It takes time to get the data from the online resource to show up in your app, hence you are using asynchronous JavaScript.

<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await</a>

Go to your `contact` page and check out the posts you `fetch`ed from the DummyJSON API and `load`ed into your page and now display in a Svelte `each` block.. :tada: :sunglasses:

<a href="http://localhost:5173/contact" target="_blank">http://localhost:5173/contact</a>

Checkout the next branch to continue.

**`git checkout 014-handle-forms-with-sveltekit`**

## 9.0 Handle Forms with SvelteKit

Let's have a look at how you can deal with forms in SvelteKit.

Create a new folder `app` in the `sveltekit/src/routes` folder, so to speak, create a new route `app`. :tada:

Let's start with a simple form that has an input for an `ID` and some `Text`.

Create a new file `+page.svelte` in the folder `sveltekit/src/routes/app`.

**sveltekit/src/routes/app/+page.svelte**

```html
<form id="create_form" method="POST">
  <label for="create_form_id_value">ID</label>
  <input
    type="text"
    name="create_form_id_value"
    id="create_form_id_value"
    value="{crypto.randomUUID()}"
  />
  <label for="create_form_text_value">Text</label>
  <input
    type="text"
    name="create_form_text_value"
    id="create_form_text_value"
    value="Lorem ipsum dolor sit amet."
  />
  <button form="create_form" type="submit">Submit</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  button {
    border-radius: 12px;
    margin-block-end: 1rem;
  }
</style>
```

**From Element**
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form</a>

**Input Element**
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#type" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#type</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#id" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#id</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#value" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#value</a>

**Button Element**
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button</a>

Now to be able to receive the form data sent SvelteKit has so called **form actions**.

<a href="https://kit.svelte.dev/docs/form-actions" target="_blank">Reference -> https://kit.svelte.dev/docs/form-actions</a>

For a normal, default form, SvelteKit has a `default` form action.

<a href="https://kit.svelte.dev/docs/form-actions#default-actions" target="_blank">Reference -> https://kit.svelte.dev/docs/form-actions#default-actions</a>

Create a new file `+page.server.ts` in the folder `sveltekit/src/routes/app`.

You declare an `actions` **object** and inside it use the `default` keyword as **key** for the `actions` **object**.

Once you are writing the **value** associated with the **key** of the **object** you are declaring a **method**.

An **object** that has a **function** as the **value** for any given **key** is called a **method**.

In this case, the `default` method is dealing with receiving the sent form data.

```ts
export const actions: Actions = { default: ...
```

**sveltekit/src/routes/app/+page.server.ts**

```ts
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request }) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Request/formData
    const form_data = await request.formData();

    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
    const id = form_data.get("create_form_id_value");
    console.log(id);

    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
    const text = form_data.get("create_form_text_value");
    console.log(text);
  },
};
```

**Request: formData() method**
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Request/formData" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/API/Request/formData</a>

**FormData: get() method**
<a href="https://developer.mozilla.org/en-US/docs/Web/API/FormData/get" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/API/FormData/get</a>

Last not least, update your `Navigation` component so that you can navigate to you `app` page.

**sveltekit/src/lib/components/Navigation.svelte**

```html
<a href="/">Home</a>
<a href="/about">About</a>
<a href="/contact">Contact</a>
<a href="/app">App</a>
<hr />
```

<img src="/sveltekit/static/sveltekit-app-page-default-form.png">

Submit the form and have a look at the terminal, you should have following output.

```bash
11:56:46 AM [vite] page reload src/routes/app/+page.server.ts (x4)
185baa29-5415-4d31-b7d0-bd7daf10fc7c
Lorem ipsum dolor sit amet.
60598583-6c1a-4487-b6ba-164e4294f637
Lorem ipsum dolor sit amet.
60802eeb-299c-49c3-b46c-325486100793
Lorem ipsum dolor sit amet.
```

That is it, you just submitted a form and received its values in SvelteKit on the server. :tada: :muscle: :rocket:

Now how about if you like to display the received form data back on your `app` page.

For this you simply return the received data in the `default` form action.

**sveltekit/src/routes/app/+page.server.ts**

```ts
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request }) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Request/formData
    const form_data = await request.formData();

    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
    const id = form_data.get("create_form_id_value");
    console.log(id);

    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
    const text = form_data.get("create_form_text_value");
    console.log(text);

    // return the received form data back to the page
    return { id, text };
  },
};
```

To display the `return`ed form data on your `app` page you use the `form` property that will receive the form data on the page.

**sveltekit/src/routes/app/+page.svelte**

```html
<script lang="ts">
  import type { ActionData } from "./$types";
  // receive the sent form data on the page with the form property
  export let form: ActionData;
</script>

<pre>{JSON.stringify(form, null, 2)}</pre>

<form id="create_form" method="POST">
  <label for="create_form_id_value">ID</label>
  <input
    type="text"
    name="create_form_id_value"
    id="create_form_id_value"
    value="{crypto.randomUUID()}"
  />
  <label for="create_form_text_value">Text</label>
  <input
    type="text"
    name="create_form_text_value"
    id="create_form_text_value"
    value="Lorem ipsum dolor sit amet."
  />
  <button form="create_form" type="submit">Submit</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  button {
    border-radius: 12px;
    margin-block-end: 1rem;
  }
</style>
```

<img src="/sveltekit/static/sveltekit-app-page-default-form-form-property-on-page.png">

:tada: :heart: :thumbsup:

Checkout the next branch to continue.

**`git checkout 015-named-form-actions`**

## 10.0 Handle Named Form Actions with SvelteKit

Besides the `default` form action you can supply any name you like for any other form on the page and hence trigger any needed logic with it on the server.

<a href="https://kit.svelte.dev/docs/form-actions#named-actions" target="_blank">Reference -> https://kit.svelte.dev/docs/form-actions#named-actions</a>

One very important aspect to understand about form actions is this.

A page with a form that is submitted triggers the corresponding form action.

**AFTER** the form action has completed running the **`load` function** of your page will run on.

<a href="https://kit.svelte.dev/docs/form-actions#loading-data" target="_blank">Reference -> https://kit.svelte.dev/docs/form-actions#loading-data</a>

_After an action runs, the page will be re-rendered (unless a redirect or an unexpected error occurs), with the action's return value available to the page as the form prop. This means that your page's load functions will run after the action completes._

Let's see how this works..

Define a `load` function in the `+page.server.ts` file of you `app` page.

For now just return the current date to the page.

**sveltekit/src/routes/app/+page.server.ts**

```ts
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  // return the current date to the page's data property
  return { date: new Date() };
};

import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request }) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Request/formData
    const form_data = await request.formData();

    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
    const id = form_data.get("create_form_id_value");
    console.log(id);

    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
    const text = form_data.get("create_form_text_value");
    console.log(text);

    // return the received form data back to the page
    return { id, text };
  },
};
```

In your `app` page now define the `data` property that receives the data from the `load` function.

With

```html
<pre>{JSON.stringify(form, null, 2)}</pre>
```

you display the returned `form` data from the **form action** on the `app` page.

With

```html
<pre>{JSON.stringify(data, null, 2)}</pre>
```

you display the returned `data` from the **load function** on the `app` page.

**sveltekit/src/routes/app/+page.svelte**

```html
<script lang="ts">
  import type { ActionData } from "./$types";
  // receive the sent form data on the page with the form property
  export let form: ActionData;

  import type { PageData } from "./$types";
  // receive the data from the load function
  export let data: PageData;
</script>

<pre>{JSON.stringify(form, null, 2)}</pre>

<pre>{JSON.stringify(data, null, 2)}</pre>

<form id="create_form" method="POST">
  <label for="create_form_id_value">ID</label>
  <input
    type="text"
    name="create_form_id_value"
    id="create_form_id_value"
    value="{crypto.randomUUID()}"
  />
  <label for="create_form_text_value">Text</label>
  <input
    type="text"
    name="create_form_text_value"
    id="create_form_text_value"
    value="Lorem ipsum dolor sit amet."
  />
  <button form="create_form" type="submit">Submit</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  button {
    border-radius: 12px;
    margin-block-end: 1rem;
  }
</style>
```

<img src="/sveltekit/static/sveltekit-app-page-display-form-data-and-load-data.png" >

So far so good.. :grin: :smile: :heart:

Now how could you demonstrate that the `load` function does indeed run **after** the form action ?

How about you define an array on the server that..

1. you can display on the `app` page from the `load` function
2. you can add data to inside a form action

:question::question::question::question:

:bulb::bulb::bulb::bulb:

Correct, you define a simple array on the server that is outside the scope of the `load` function and outside the scope of the form action.

You are working with an _in-memory data structure_ here. :muscle:

<a href="https://learn.svelte.dev/tutorial/the-form-element" target="_blank">Reference -> https://learn.svelte.dev/tutorial/the-form-element</a>

1. define an empty array that both the load function and the form action have access to

```ts
const items = [];
```

2. return the `items` array to the page's `data` property with the `load` function

```ts
return { items };
```

3. push to the `items` array inside the form action

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push</a>

```ts
items.push({ date: new Date() });
```

**sveltekit/src/routes/app/+page.server.ts**

```ts
// define an empty array that both the load function and the form action have access to
const items = [];

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  // return the items array to the page's data property with the load function
  return { items };
};

import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async ({ request }) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Request/formData
    const form_data = await request.formData();

    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
    const id = form_data.get("create_form_id_value");
    console.log(id);

    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
    const text = form_data.get("create_form_text_value");
    console.log(text);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    // push to the items array inside the form action
    items.push({ date: new Date() });

    // return the received form data back to the page
    return { id, text };
  },
};
```

Submit the form on your `app` page a couple of times and see what is going on..

Try to visualize the flow of data through your app in your head..

Every time you submit the form a new date is pushed to the `items` array.

After the form action has finished running the `load` function runs.

Last not least, the `load` function loads the updated `data` with the `items` array to the `app` page.

:boom::bulb::zap::exploding_head::boom::bulb::zap::exploding_head::boom::bulb::zap::exploding_head:

<img src="/sveltekit/static/sveltekit-app-page-push-to-items-array-in-form-load-data-in-page.png">

Checkout the next branch to continue.

**`git checkout 016-introduce-named-form-actions`**

So far you have worked with the `default` form action and you have learned how data flows from your `app` page's form to the server, there to the `default` form action and last not least is then returned back to the `app` page with the `load` function.

Let's introduce a **named form action** at this point..

In the `+page.svelte` file of your `app` page, add a form action to the form element.

**sveltekit/src/routes/app/+page.svelte**

```html
<form id="create_form" method="POST" action="?/create">...</form>
```

The rest of the `+page.svelte` file stays the same.

**sveltekit/src/routes/app/+page.svelte**

```html
<script lang="ts">
  import type { ActionData } from "./$types";
  // receive the sent form data on the page with the form property
  export let form: ActionData;

  import type { PageData } from "./$types";
  // receive the data from the load function
  export let data: PageData;
</script>

<pre>{JSON.stringify(form, null, 2)}</pre>

<pre>{JSON.stringify(data, null, 2)}</pre>

<!-- add the form action "create" to the form element -->
<form id="create_form" method="POST" action="?/create">
  <label for="create_form_id_value">ID</label>
  <input
    type="text"
    name="create_form_id_value"
    id="create_form_id_value"
    value="{crypto.randomUUID()}"
  />
  <label for="create_form_text_value">Text</label>
  <input
    type="text"
    name="create_form_text_value"
    id="create_form_text_value"
    value="Lorem ipsum dolor sit amet."
  />
  <button form="create_form" type="submit">Submit</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  button {
    border-radius: 12px;
    margin-block-end: 1rem;
  }
</style>
```

Now that you have a **named form action** in your form element you also need to adjust the form action on the server.

In the `+page.server.ts` file of your `app` page, change the `default` from action to the `create` form action.

**Before**

```ts
default: async ({ request }) => {
```

**After**

```ts
create: async ({ request }) => {
```

The rest of the `+page.server.ts` file stays the same.

**sveltekit/src/routes/app/+page.server.ts**

```ts
// define an empty array that both the load function and the form action have access to
const items = [];

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  // return the items array to the page's data property with the load function
  return { items };
};

import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  // change the default form action to the create form action
  create: async ({ request }) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Request/formData
    const form_data = await request.formData();

    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
    const id = form_data.get("create_form_id_value");
    console.log(id);

    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
    const text = form_data.get("create_form_text_value");
    console.log(text);

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    // push to the items array inside the form action
    items.push({ date: new Date() });

    // return the received form data back to the page
    return { id, text };
  },
};
```

<img src="/sveltekit/static/sveltekit-app-page-named-form-action-create.png">

:rocket: :muscle: :smile: :tada: :sunglasses:

Can you spot the **difference** to the `default` form action.. :question::question::question::question:

Checkout the next branch to continue.

**`git checkout 017-define-type-for-items-array`**

Let's quickly define the type for the `items` array..

**sveltekit/src/routes/app/+page.server.ts**

```ts
// define the type of the items array
interface Items {
  date: Date;
}

// define an empty array that both the load function and the form action have access to
const items: Items[] = [];
```

## 11.0 Iterate over loaded Data with an Each block

**`git checkout 018-iterate-over-loaded-data-with-an-each-block`**

Use an `each` block to iterate over the loaded data for your `app` page.

**sveltekit/src/routes/app/+page.svelte**

```html
<script lang="ts">
  import type { PageData } from "./$types";
  // receive the data from the load function
  export let data: PageData;
</script>

<!-- add the form action "create" to the form element -->
<form id="create_form" method="POST" action="?/create">
  <label for="create_form_id_value">ID</label>
  <input
    type="text"
    name="create_form_id_value"
    id="create_form_id_value"
    value="{crypto.randomUUID()}"
  />
  <label for="create_form_text_value">Text</label>
  <input
    type="text"
    name="create_form_text_value"
    id="create_form_text_value"
    value="Lorem ipsum dolor sit amet."
  />
  <button form="create_form" type="submit">Submit</button>
</form>

<!-- iterate over the loaded data with an each block -->
{#each data.items as element}
<div class="item">
  <div class="info">
    <div>element id : {element.id}</div>
    <div>element text : {element.text}</div>
    <div>element status : {element.completed}</div>
  </div>
</div>
{/each}

<!-- display the stringified loaded data of the data property of the page -->
<pre>{JSON.stringify(data, null, 2)}</pre>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  button {
    border-radius: 12px;
    margin-block-end: 1rem;
  }
  .item {
    background-color: lightskyblue;
    border-radius: 12px;
    margin-block-end: 2rem;
    color: black;
    padding: 1rem;
    font-size: 1.6rem;
    font-weight: bold;
  }
  .info {
    padding-block-end: 2rem;
  }
</style>
```

Change the properties on the `items` array to have an `id`, some `text` and a `completed` property.

Yes, you can already assume what is going on, you are starting to turn your app into a Todo app. :grin:

**sveltekit/src/routes/app/+page.server.ts**

```ts
// define the type of the items array
interface Items {
  id: string | FormDataEntryValue | null;
  text: string | FormDataEntryValue | null;
  completed: boolean;
}

// define an empty array that both the load function and the form action have access to
const items: Items[] = [];

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  // return the items array to the page's data property with the load function
  return { items };
};

import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
  // change the default form action to the create form action
  create: async ({ request }) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Request/formData
    const form_data = await request.formData();

    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
    const id = form_data.get("create_form_id_value");
    console.log(id);

    // https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
    const text = form_data.get("create_form_text_value");
    console.log(text);

    // the default state for the item is false
    const completed = false;

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    // push to the items array inside the form action
    // instead of simply pushing a new date to the items array you now push the 3 properties to the items array
    // the 3 properties you push to the items array are inside an object
    // hence you will end up with an array of objects inside the items array
    items.push({ id, text, completed });

    // return the received form data back to the page
    return { id, text };
  },
};
```

<img src="/sveltekit/static/sveltekit-app-page-iterate-over-data-with-each-block-start-of-todo-app.png">

:boom::smile::rocket::tada::heart::boom::smile::rocket::tada::heart::boom::smile::rocket::tada::heart:

Checkout the next branch to continue.

**`git checkout 019-introduce-further-form-actions`**

## 12.0 Introduce further Form Actions - complete

Next you are going to make it possible to mark a single item^s `completed` state as either `true` or `false`.

For that you need the item `id` and send that to a new form action `complete` in your `+page.server.ts` file.

In the form you can set the value of the `input` element to the item `id` and then when you have that item `id` in the form action `complete` you can find the object with that `id` in the array of objects, the `items` array.

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find</a>

**sveltekit/src/routes/app/+page.svelte**

```html
<!-- form action "complete" -->
<!-- create a new form and send the element.id to the form action "complete"-->
<form id="complete_form" method="POST" action="?/complete">
  <button form="complete_form" name="complete_id_value" value="{element.id}">
    completed : {element.completed}
  </button>
</form>
```

**sveltekit/src/routes/app/+page.server.ts**

```ts
complete: async ({ request }) => {
  const form_data = await request.formData();

  const complete_id = form_data.get("complete_id_value");

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  // find the item with the specific id passed to the form action from the app page's complete form action
  const foundItem = items.find((element) => element.id === complete_id);

  // if you find the item with the received id you can set its property completed, the boolean, to the opposite of what it currently is
  if (foundItem) foundItem.completed = !foundItem.completed;
};
```

<img src="/sveltekit/static/sveltekit-app-page-complete-form-action.png">

:smile: :rocket: :muscle: :sunglasses: :tada: :smile: :rocket: :muscle: :sunglasses: :tada:

Checkout the next branch to continue.

**`git checkout 020-introduce-delete-action`**

## 13.0 Introduce further Form Action - delete

**sveltekit/src/routes/app/+page.svelte**

```html
<!-- form action "delete" -->
<!-- create a new form and send the element.id to the form action "delete"-->
<form id="delete_form" method="POST" action="?/delete">
  <button form="delete_form" name="delete_id_value" value="{element.id}">
    delete
  </button>
</form>
```

**sveltekit/src/routes/app/+page.server.ts**

```ts
// as soon as you start to assign the items array to the filtered items array in the delete from action it then has to be declared as let
let items: Items[] = [];
```

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter</a>

**sveltekit/src/routes/app/+page.server.ts**

```ts
	delete: async ({ request }) => {
		const form_data = await request.formData();

		const delete_id = form_data.get('delete_id_value');

		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
		// filter the item with the specific id passed to the form action from the app page's delete form action
		items = items.filter((element) => element.id !== delete_id);
	}
```

<img src="/sveltekit/static/sveltekit-app-page-delete-form-action.png">

:rocket: :sunglasses: :tada: :rocket: :sunglasses: :tada:

Checkout the next branch to continue.

**`git checkout 021-introduce-update-form-action`**

## 14.0 Introduce further Form Action - update

**sveltekit/src/routes/app/+page.svelte**

```html
<!-- form action "update" -->
<!-- create a new form and send the element.id as well as the new element.text to the form action "update"-->
<form id="update_form" method="POST" action="?/update">
  <input
    type="text"
    name="update_text_value"
    id="update_text_value"
    value="{element.text}"
  />
  <button form="update_form" name="update_id_value" value="{element.id}">
    update
  </button>
</form>
```

**sveltekit/src/routes/app/+page.server.ts**

```ts
update: async ({ request }) => {
  const form_data = await request.formData();

  const update_id = form_data.get("update_id_value");

  const update_text = form_data.get("update_text_value");

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  // find the item with the specific id passed to the form action from the app page's update form action
  const foundItem = items.find((element) => element.id === update_id);

  // if you find the item with the received id you can set its property text to the value received through the form
  if (foundItem) foundItem.text = update_text;
};
```

<img src="/sveltekit/static/sveltekit-app-page-update-form-action.png">

:sunglasses: :tada: :rocket: :sunglasses: :tada: :rocket:

Checkout the next branch to continue.

**`git checkout 022-no-javascript`**

## 15.0 No JavaScript

In Chrome Developer Tools hit `ctrl` + `shift` + `p` and type `JavaScript`.

<img src="/sveltekit/static/chrome-devtools-no-javascript.png">

Your Todo App runs without JavaScript.

Well, almost..

If you add 2 or more items and try to update the `text` value, the updated values will not show up on the correct item.

This is because the form elements are inside the `each` block, though they each have the **same** form id.

Just add the `index` to each form id and everything works just fine.

**sveltekit/src/routes/app/+page.svelte**

```html
<!-- iterate over the loaded data with an each block -->
{#each data.items as element, index}
<div class="item">
  <div class="info">
    <div>element id : {element.id}</div>
    <div>element text : {element.text}</div>
    <div>element status : {element.completed}</div>
  </div>
  <!-- form action "complete" -->
  <!-- create a new form and send the element.id to the form action "complete"-->
  <form id="complete_form_{index}" method="POST" action="?/complete">
    <button
      form="complete_form_{index}"
      name="complete_id_value"
      value="{element.id}"
    >
      completed : {element.completed}
    </button>
  </form>
  <!-- form action "delete" -->
  <!-- create a new form and send the element.id to the form action "delete"-->
  <form id="delete_form_{index}" method="POST" action="?/delete">
    <button
      form="delete_form_{index}"
      name="delete_id_value"
      value="{element.id}"
    >
      delete
    </button>
  </form>

  <!-- form action "update" -->
  <!-- create a new form and send the element.id as well as the new element.text to the form action "update"-->
  <form id="update_form_{index}" method="POST" action="?/update">
    <input
      type="text"
      name="update_text_value"
      id="update_text_value"
      value="{element.text}"
    />
    <button
      form="update_form_{index}"
      name="update_id_value"
      value="{element.id}"
    >
      update
    </button>
  </form>
</div>
{/each}
```

:rocket: :muscle: :smile: :tada: :sunglasses:

Checkout the next branch to continue.

**`git checkout 023-progressive-enhancement`**
