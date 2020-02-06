import React from 'react';
import BetBox from './BetBox';

const BET_COLORS = ['RED','BLUE','GREEN','PINK','ORANGE','YELLOW'];

const randomize_colors = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const colorgame = props => {
	return (
		<div>
			<BetBox betcolor={BET_COLORS[randomize_colors(6)]}/>
			<BetBox betcolor={BET_COLORS[randomize_colors(6)]}/>
			<BetBox betcolor={BET_COLORS[randomize_colors(6)]}/>
		</div>
	);
};

export default colorgame;
