import SwingMiddle from './SwingMiddle/SwingMiddle.svelte';
import SwingOver from './SwingOver/SwingOver.svelte';
import SwingBelow from './SwingBelow/SwingBelow.svelte';

export const burgers = [
	{
		name: 'Swing Over',
		burgerComponent: SwingOver,
		slug: 'swing-over'
	},
	{
		name: 'Swing Middle',
		burgerComponent: SwingMiddle,
		slug: 'swing-middle'
	},
	{
		name: 'Swing Below',
		burgerComponent: SwingBelow,
		slug: 'swing-below'
	}
];
