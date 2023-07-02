<script lang="ts">
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
	import '@fontsource/inter/800.css';
	import '@fontsource/inter/900.css';

	import '../app.postcss';
	import '$lib/burgers/SwingOver/swing-over.css';
	import '$lib/burgers/SwingMiddle/swing-middle.css';
	import '$lib/burgers/SwingBelow/swing-below.css';

	import { Somerset } from 'somerset';
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="57x57" href="/favicons/favicon-57x57.png" />
	<link rel="apple-touch-icon" sizes="60x60" href="/favicons/favicon-60x60.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="/favicons/favicon-72x72.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="/favicons/favicon-76x76.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="/favicons/favicon-114x114.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="/favicons/favicon-120x120.png" />
	<link rel="apple-touch-icon" sizes="144x144" href="/favicons/favicon-144x144.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="/favicons/favicon-152x152.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/favicons/favicon-180x180.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
	<link rel="icon" type="image/png" sizes="192x192" href="/favicons/favicon-192x192.png" />
	<link rel="shortcut icon" type="image/x-icon" href="/favicons/favicon.ico" />
	<link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
	<meta name="msapplication-TileColor" content="#ffffff" />
	<meta name="msapplication-TileImage" content="/favicons/favicon-144x144.png" />
	<meta name="msapplication-config" content="/browserconfig.xml" />

	<script
		async
		src="https://umami.services.shaunchander.me/script.js"
		data-website-id="8ff0b9ad-3e39-4ddc-a050-0c5b6c8b5afb"
	></script>
</svelte:head>

<Somerset
	title="🍔 Burgers"
	description="A small collection of animated framework-agnostic burgers for your projects. Crafted with TailwindCSS."
	canonical="https://burgers.shaunchander.me"
	openGraph={{
		siteName: 'Burgers',
		title: '🍔 Burgers',
		description:
			'A small collection of animated framework-agnostic burgers for your projects. Crafted with TailwindCSS.',
		url: 'https://burgers.shaunchander.me',
		images: [
			{
				url: 'https://burgers.shaunchander.me/og.png'
			}
		]
	}}
	``
	twitter={{
		cardType: 'summary_large_image'
	}}
/>

<main class="p-8 flex flex-col flex-1">
	<div class="max-w-4xl w-full mx-auto">
		<slot />
	</div>
</main>
<footer class="p-8">
	<div class="container mx-auto space-y-4">
		<div class="w-full h-px bg-slate-50/10" />
		<p class="text-center text-slate-200/60">
			Built by <a
				class="text-purple-300/80 hover:text-purple-400/80 duration-300 ease-in-out"
				href="https://twitter.com/shaunchander"
				target="_blank"
				rel="noopener noreferrer">Shaun Chander</a
			>.
		</p>
	</div>
</footer>
<div class="absolute inset-0 pointer-events-none">
	<img src="/bg.png" alt="" class="w-full h-full opacity-40 object-cover" />
</div>
