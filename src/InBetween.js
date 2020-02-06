import React from 'react';

const CLUBS = ['C1','C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C12','C13'];

const SPADE = ['S1','S2','S3','S4','S5','S6','S7','S8','S9','S10','S11','S12','S13'];

const HEART = ['H1','H2','H3','H4','H5','H6','H7','H8','H9','H10','H11','H12','H13'];

const DIAMOND = ['D1','D2','D3','D4','D5','D6','D7','D8','D9','D10','D11','D12','D13'];

const shuffleArray = array => {
	return array.sort(() => .5 - Math.random());
}

const inbetween = props => {
	let deck = shuffleArray([...CLUBS, ...SPADE, ...HEART, ...DIAMOND]);
	return (
		<div>
			<h1>In Between</h1>
				<p>{deck[23]}</p>	
		</div>
	);
};

export default inbetween;