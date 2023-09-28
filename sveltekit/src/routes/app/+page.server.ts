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

		// return the received form data back to the page
		return { id, text };
	}
};
