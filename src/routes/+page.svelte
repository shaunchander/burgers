<script>
	import { burgers } from '../lib/burgers';
	import Burger from '../lib/components/Burger.svelte';
</script>

<div class="space-y-12">
	<div class="space-y-4 text-center">
		<h1>
			<span>🍔</span>
			<span class="bg-gradient-to-tr from-slate-200 to-purple-400 bg-clip-text text-transparent">
				Burgers.
			</span>
		</h1>
		<p class="text-slate-200/80 md:w-1/2 md:mx-auto">
			A small collection of animated framework-agnostic burgers for your projects. Crafted with
			TailwindCSS.
		</p>
		<em class="text-sm block text-slate-200/40">(Click on a burger to view source code.)</em>
	</div>
	<div>
		<ul
			class="divide-y md:divide-x md:divide-y-0 divide-dashed divide-slate-50/20 grid md:grid-cols-3 md:grid border border-slate-50/20"
		>
			{#each burgers as burger}
				<li>
					<Burger name={burger.name} slug={burger.slug} burgerComponent={burger.burgerComponent} />
				</li>
			{/each}
		</ul>
	</div>
</div>
