import { JSX } from "react";
import MovieCardAll from "./MovieCardAll";

const getTopRatedMovies = async () => {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.API_KEY}`,
		},
	};

	try {
		const res = await fetch(
			"https://api.themoviedb.org/3/genre/movie/list?language=en",
			options
		);
		if (res.ok) {
			const data = await res.json();
			return data;
		} else {
			console.error(`Error: ${res.status} - ${res.statusText}`);
		}
	} catch (err) {
		console.error(err);
	}
};

const AllMovies = async () => {
	const topRatedMovies = await getTopRatedMovies();
	const movies = topRatedMovies.results;

	// Get original title and map over all of them

	// return (
	// 	<div className="flex border-2 gap-4 ">
	// 		{movies.map((movie: JSX.IntrinsicAttributes & { title: any; poster_path: any }) => (
	// 			<MovieCardAll
	// 				key={movie.id}
	// 				{...movie}
	// 			/>
	// 		))}
	// 	</div>
	// );
};

export default AllMovies;
