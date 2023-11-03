import React from 'react';
import RatingIcon from './RatingIcon';

const RatingComponent = ({ 
	onRatingChange, // called when rating is changed
	disabled, // if true, rating cannot be changed
	maxRating, // maximum rating, default must be 5
	rating // current rating, must have a default
}) => {
	const arr = [...Array(maxRating).keys()]

	return (
		<span className="">
			{/*  YOUR CODE HERE */}
		</span>
	)
}

export default RatingComponent;