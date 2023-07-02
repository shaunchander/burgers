<script lang="ts">
	export let name: string;
	export let slug: string;
	export let burgerComponent: ConstructorOfATypedSvelteComponent;
</script>

<a
	href={`/${slug}`}
	class="block py-6 px-4 hover:bg-slate-900/40 transition duration-300 ease-in-out"
>
	<div class="w-10/12 mx-auto">
		<svelte:component this={burgerComponent} />
	</div>
	<h3 class="text-slate-200/60 text-sm mt-2 text-center">{name}</h3>
</a>
