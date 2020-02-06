import React from 'react';

const betbox = props => {
	return (
		<div style={{backgroundColor:props.betcolor,padding:'10px',border:'1px solid black',width:'150px',height:'150px',float:'left',marginRight:'10px'}} />
	);
};

export default betbox;