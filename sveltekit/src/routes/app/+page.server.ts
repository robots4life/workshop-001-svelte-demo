// define an empty array that both the load function and the form action have access to
const items = [];

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// return the items array to the page's data property with the load function
	return { items };
};

import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		// https://developer.mozilla.org/en-US/docs/Web/API/Request/formData
		const form_data = await request.formData();

		// https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
		const id = form_data.get('create_form_id_value');
		console.log(id);

		// https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
		const text = form_data.get('create_form_text_value');
		console.log(text);

		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
		// push to the items array inside the form action
		items.push({ date: new Date() });

		// return the received form data back to the page
		return { id, text };
	}
};
