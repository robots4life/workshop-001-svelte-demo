// @ts-nocheck
// import the type for the load function
import type { PageServerLoad } from './$types';

export const load = async () => {
	// the request
	const request = await fetch('https://dummyjson.com/posts');

	// the response, turn the JSON response and parse it to a JavaScript object
	const response = await request.json();

	// return the response from the load function
	return { dummyJSONPostsData: response };
};
;null as any as PageServerLoad;