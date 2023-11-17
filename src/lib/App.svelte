<script>
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';

	// sizing
	let w = 100;
	$: h = w / 1.7777; // 16:9

	// state management
	let nStates = 4;
	let stateIdx = 0;
	const updateState = (newState) => (stateIdx = newState);
</script>

<div class="container" bind:clientWidth={w} style:height={`${h}px`}>
	<Canvas size={{ width: w, height: h }}>
		<Scene {stateIdx} />
	</Canvas>
</div>

<div class="buttons-container">
	{#each Array(nStates).fill() as _, i}
		<button on:click={() => updateState(i)}>{i}</button>
	{/each}
</div>
<div class="state-label">
	{stateIdx}
</div>

<style>
	.container {
		margin: 50px auto;
		width: 90vw;
		border: solid 1px #ccc;
	}

	.buttons-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button {
		margin: 20px 10px;
		width: 40px;
	}

	.state-label {
		width: 100%;
		margin: 30px 0;
		display: block;
		text-align: center;
		font-size: 32px;
		font-family: sans-serif;
	}
</style>
