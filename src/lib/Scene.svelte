<script>
	import { T } from '@threlte/core';
	import { colors } from '$lib/colors';
	import { generateData } from '$lib/data';
	import DataPoint from './DataPoint.svelte';

	export let stateIdx;
	$: console.log('scene state idx', stateIdx);

	let allStates = generateData();
	console.log('all', allStates);
	$: data = allStates.map((d) => d[stateIdx]);
	console.log('data', data);
</script>

<!-- Camera/Helper -->
<T.AxesHelper args={[5]} />
<T.PerspectiveCamera
	makeDefault
	position={[0, 10, 0]}
	on:create={({ ref }) => {
		ref.lookAt(0, 0, 0);
	}}
/>

<!-- LIGHTING -->
<T.AmbientLight intensity={0.2} />
<T.DirectionalLight position={[10, 5, 0]} />

<!-- FLOOR -->
<T.Mesh receiveShadow rotation.x={-90 * (Math.PI / 180)}>
	<T.CircleGeometry args={[30, 72]} />
	<T.MeshStandardMaterial />
</T.Mesh>

{#each data as pt}
	{@const { pos, update } = pt}
	<DataPoint {pos} {update} />
{/each}
