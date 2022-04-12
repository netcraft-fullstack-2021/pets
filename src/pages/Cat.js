import React from 'react';
import { useParams } from 'react-router-dom';
import catsData from '../CatsData';

function Cat() {
	const params = useParams();
	const { name, image, age, color } = catsData[parseInt(params.catId) - 1];
	return (
		<article>
			<h1> {name} </h1>
			<img src={image} />
			<div>
				<p>color: {color}</p>
				<p>age: {age}</p>
			</div>
		</article>
	);
}

export default Cat;
