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
