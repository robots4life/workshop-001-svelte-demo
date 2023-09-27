// import the type for the load function
import type { PageServerLoad } from './$types';

// use a load function to load data for the page
export const load: PageServerLoad = () => {
	// return data from the load function in an object
	return { intro: 'Welcome to the SvelteKit Workshop @ Liip. :)' };
};
