import React from 'react';
import RatingIcon from './RatingIcon';
import './RatingIcon.css'
const RatingComponent = ({
	onRatingChange, // called when rating is changed
	disabled, // if true, rating cannot be changed
	maxRating = 5, // maximum rating, default must be 5
	rating // current rating, must have a default
}) => {

	const onClick = (keys) => {
		// if (!disabled)
		// 	onRatingChange(keys + 1)
		if (disabled) onRatingChange(keys + 1);
	}

	const arr = [...Array(maxRating).keys()]
	const ratings = arr.map((ele, ind) => {
		if (ele < rating) return <RatingIcon key={ind} filled={1} onClick={onClick} keys={ind} />
		else return <RatingIcon key={ind} filled={0} onClick={onClick} keys={ind} isDisable={disabled} />
	})
	let ratingRow = null;
	if (disabled)
		ratingRow = <span className='op'>{ratings}</span>
	else ratingRow = <span>{ratings}</span>
	let run = 10;
	let changes = 100;
	return (
		ratingRow
	)
}

export default RatingComponent;