const nDatapts = 10;

export const generateData = () => {
	let data = Array(nDatapts).fill(); // create empty array

	// define a position and position update function for each "state"
	data = data.map((d, i) => {
		// state 1
		const state1 = {
			pos: { x: 0, y: 0, z: 0 },
			update: (initPos, tick) => initPos
		};

		// state 2
		const state2 = {
			pos: getState2Pos(i),
			update: (initPos, tick) => {
				let newY = initPos.y + tick * 0.1;
				return { ...initPos, y: newY };
			}
		};
		return [state1, state2];
	});

	return data;
};

const getState2Pos = (idx) => {
	const newX = -nDatapts / 2 + idx;
	return { x: newX, y: 0, z: 0 };
};
