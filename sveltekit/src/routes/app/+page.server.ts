// define the type of the items array
interface Items {
	id: string | FormDataEntryValue | null;
	text: string | FormDataEntryValue | null;
	completed: boolean;
}

// define an empty array that both the load function and the form action have access to
const items: Items[] = [];

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// return the items array to the page's data property with the load function
	return { items };
};

import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	// change the default form action to the create form action
	create: async ({ request }) => {
		// https://developer.mozilla.org/en-US/docs/Web/API/Request/formData
		const form_data = await request.formData();

		// https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
		const id = form_data.get('create_form_id_value');
		console.log(id);

		// https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
		const text = form_data.get('create_form_text_value');
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
	}
};
