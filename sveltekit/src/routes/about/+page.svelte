<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>About</h1>

<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

{#each data.postsData as element, index}
	<p>index: {index}</p>
	<p>element id: {element.id}</p>
	<h1>element title: {element.title}</h1>
	<p>element post: {element.post}</p>
	<hr />
{/each}
