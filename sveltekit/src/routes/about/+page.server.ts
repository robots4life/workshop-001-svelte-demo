// import the type for the load function
import type { PageServerLoad } from './$types';

// use a load function to load data for the page
export const load: PageServerLoad = () => {
	// array of objects
	const posts = [
		{
			id: crypto.randomUUID(),
			title: 'How to load data into page',
			post: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum impedit minus ea!'
		},
		{
			id: crypto.randomUUID(),
			title: 'How to work with SvelteKit',
			post: 'Lorem ipsum dolor sit amet consectetur.'
		},
		{
			id: crypto.randomUUID(),
			title: 'How to load work with objects',
			post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam vitae vero et alias id quas facilis tempore? Vel, omnis?'
		},
		{
			id: crypto.randomUUID(),
			title: 'How to work with arrays',
			post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis, facilis expedita labore molestiae praesentium exercitationem? Similique explicabo quae error? Fugit iusto nihil eligendi.'
		}
	];

	// return data from the load function in an object
	return { postsData: posts };
};
