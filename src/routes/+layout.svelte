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
</script>

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
