<script lang="ts">
	export let data;

	import { burgers } from '$lib/burgers/index.js';
	import { Somerset } from 'somerset';

	const currentBurgerComponent = burgers.find((burger) => burger.slug === data.slug);
	import { ClipboardIcon } from 'svelte-feather-icons';
</script>

<Somerset
	title={data.componentName + '| 🍔 Burgers'}
	canonical={`https://burgers.shaunchander.me/${data.slug}`}
	openGraph={{
		title: data.componentName + '| 🍔 Burgers',
		url: `https://burgers.shaunchander.me/${data.slug}`
	}}
/>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css"
		integrity="sha512-rO+olRTkcf304DQBxSWxln8JXCzTHlKnIdnMUwYvQa9/Jd4cQaNkItIUj6Z4nvW1dqK0SKXLbn9h4KwZTNtAyw=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>

{#if currentBurgerComponent}
	<div class="space-y-6">
		<div>
			<a href="/" class="text-purple-300/80 hover:text-purple-400/80 duration-300 ease-in-out">
				<span class="text-slate-200/60">←</span> Go back
			</a>
		</div>
		<div class="space-y-2 max-w-lg">
			<h2>🍔 {data.componentName} Burger</h2>
			<p class="text-slate-200/60">
				Copy the <strong>HTML</strong> and <strong>CSS</strong> below into your project.
			</p>
			<p class="text-slate-200/60">
				Remember to programmatically add the <code class="inline-block bg-slate-800/80"
					>.{data.slug}-opened</code
				> class to the burger when you want to trigger the animation (for now we trigger it on hover).
			</p>
		</div>
		<div>
			<div class="border border-slate-50/20 p-6 flex justify-center items-center">
				<div class="w-1/2 max-w-sm">
					<svelte:component this={currentBurgerComponent.burgerComponent} />
				</div>
			</div>
			<div class="border border-slate-50/20 p-6 overflow-x-scroll relative">
				<div class="absolute top-4 right-4">
					<button
						on:click={() => {
							navigator.clipboard.writeText(data.html);
						}}
						class="flex items-center gap-x-2 p-2 border border-slate-50/20 rounded-lg hover:border-slate-50/80 text-slate-200/60 hover:text-slate-200 transition duration-300 ease-in-out"
					>
						<ClipboardIcon class="w-4 h-4" />
						<span>Copy</span>
					</button>
				</div>
				{@html data.formattedHtml}
			</div>
			<div class="border border-slate-50/20 p-6 overflow-x-scroll relative">
				<div class="absolute top-4 right-4">
					<button
						on:click={() => {
							navigator.clipboard.writeText(data.css);
						}}
						class="flex items-center gap-x-2 p-2 border border-slate-50/20 rounded-lg hover:border-slate-50/80 text-slate-200/60 hover:text-slate-200 transition duration-300 ease-in-out"
					>
						<ClipboardIcon class="w-4 h-4" />
						<span>Copy</span>
					</button>
				</div>
				{@html data.formattedCss}
			</div>
		</div>
	</div>
{/if}
