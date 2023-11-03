import React from 'react';
import StarFull from '../assets/star-full.svg';
import StarEmpty from '../assets/star-empty.svg';
import './RatingIcon.css'

const RatingIcon = ({ keys, filled, onClick }) => {
	const whichStar = (filled) ? StarFull : StarEmpty;
	return (
		<span className='rating-icon'>
			<img className='rating-img' src={whichStar} onClick={() => onClick(keys)} />
		</span>
	);
}

export default RatingIcon;
