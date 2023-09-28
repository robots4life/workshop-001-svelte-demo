<script lang="ts">
	import type { ActionData } from './$types';
	// receive the sent form data on the page with the form property
	export let form: ActionData;

	import type { PageData } from './$types';
	// receive the data from the load function
	export let data: PageData;
</script>

<pre>{JSON.stringify(form, null, 2)}</pre>

<pre>{JSON.stringify(data, null, 2)}</pre>

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
