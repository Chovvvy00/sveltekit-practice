<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} />
	<strong>Header</strong>
</svelte:head>

<div class="bg-amber-50">
	{@render children()}
</div>

<!-- <footer class="flex justify-center bg-amber-400" >
	<p class="text-3xl">Footer</p>
</footer> -->


<style>

</style>