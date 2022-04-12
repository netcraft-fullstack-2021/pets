import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import catsData from '../CatsData';

function Cats() {
	const param = useParams();

	return (
		<main className="cats">
			<h1> Cats </h1>
			{param.catId ? (
				<Outlet />
			) : (
				<section>
					{catsData.map(({ id, image }) => (
						<Link to={id} key={id}>
							<img src={image} />
						</Link>
					))}
				</section>
			)}
		</main>
	);
}

export default Cats;
