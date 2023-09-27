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

## 5.0 Loading Data for Pages

**`git checkout 008-loading-data-for-pages`**

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

```ts
<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<pre>{JSON.stringify(data, null, 2)}</pre>

<h1>About</h1>

<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi asperiores dolores, quos ducimus
	aspernatur ex doloribus. Aut illo in non?
</p>
```

Go to your `about` page and admire the data you have just loaded into the page. :tada: :heart: :rocket:

<a href="http://localhost:5173/about" target="_blank">http://localhost:5173/about</a>

<img src="/sveltekit/static/sveltekit-about-page-load-data.png">

## 6.0 Work with Loaded Data in Page Markup

**`git checkout 009-work-with-loaded-data-in-page-markup`**

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

## 7.0 Work with an Array of Objects in Page Markup

**`git checkout 010-work-with-array-of-objects-in-page-markup`**

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

```ts
<script lang="ts">
	import type { PageData } from './$types';
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

```ts
<script lang="ts">
	import type { PageData } from './$types';
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

```ts
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

## 8.0 Fetch Data from a Resource and Load it into a Page

**`git checkout 012-fetch-data-and-load-it-in-a-page`**

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

```ts
<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Contact</h1>

<pre>{JSON.stringify(data, null, 2)}</pre>
```

<img src="/sveltekit/static/sveltekit-contact-page-fetch-dummyjson-posts.png">

Go to your `contact` page and check out the posts you `fetch`ed from the DummyJSON API and `load`ed into your page.. :tada: :sunglasses:

<a href="http://localhost:5173/contact" target="_blank">http://localhost:5173/contact</a>

### 8.1 Use an Each block on the Contact Page for the Posts Data

**`git checkout 013-use-each-block-for-posts-data-on-contact-page`**

Just like did on your `about` page, iterate the `dummyJSONPostsData` object with an `each` block.

**sveltekit/src/routes/contact/+page.svelte**

```ts
<script lang="ts">
	import type { PageData } from './$types';
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

With the `toString()` method that object it turned into a string, separated by commas between each value.

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

**Question** : What is the important different in the `load` function of your `about` page and your `contact` page besides that fact that you work with data from an external resource ?

**Answer** : You are making the `load` function of your `contact` page asynchronous by prefixing it with the `async` keyword and using `await` to wait for the `fetch` request to complete as well as for the parsing, `.json()`, of the JSON data into a JavaScript object.

<a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await" target="_blank">Reference -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await</a>

Go to your `contact` page and check out the posts you `fetch`ed from the DummyJSON API and `load`ed into your page and now display in a Svelte `each` block.. :tada: :sunglasses:

<a href="http://localhost:5173/contact" target="_blank">http://localhost:5173/contact</a>
