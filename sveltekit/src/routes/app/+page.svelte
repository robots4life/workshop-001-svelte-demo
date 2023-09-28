<script lang="ts">
	import type { PageData } from './$types';
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
		value={crypto.randomUUID()}
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
		<!-- form action "complete" -->
		<!-- create a new form and send the element.id to the form action "complete"-->
		<form id="complete_form" method="POST" action="?/complete">
			<button form="complete_form" name="complete_id_value" value={element.id}
				>completed : {element.completed}</button
			>
		</form>
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
