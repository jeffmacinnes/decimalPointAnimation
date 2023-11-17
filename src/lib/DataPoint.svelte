<script>
	import { tweened } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { T } from '@threlte/core';
	import { colors } from '$lib/colors';
	import { backOut } from 'svelte/easing';
	import { gsap } from 'gsap';

	export let pos;
	export let update;

	let groupPos = { x: 0, y: 0, z: 0 };

	const updateGroupPos = () => {
		gsap.to(groupPos, {
			x: pos.x,
			y: pos.y,
			z: pos.z,
			duration: 0.75,
			ease: 'back.out(5.7)',
			onUpdate: () => (groupPos = groupPos) // necessary to trigger re-render
		});
	};

	const resetDatapt = () => {
		// update the tween for the new group position
		updateGroupPos();

		let localPos = { x: 0, y: 0, z: 0 };
	};

	$: pos, resetDatapt();
</script>

<T.Group position.x={groupPos.x} position.y={groupPos.y} position.z={groupPos.z}>
	<T.Mesh position.x="0" position.y="0" position.z="0" scale={0.25} castShadow receiveShadow>
		<T.CylinderGeometry />
		<T.MeshStandardMaterial color={colors.orange} />
	</T.Mesh>
</T.Group>
