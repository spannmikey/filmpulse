import MovieCard from "./MovieCard";

interface Movie {
	id: number;
	title: string;
	poster_path: string;
}

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
			"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
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

const Cards = async () => {
	const topRatedMovies = await getTopRatedMovies();
	const movies = topRatedMovies.results as Movie[];

	// Get original title and map over all of them

	return (
		<div className="flex flex-wrap items-center justify-start gap-4 ">
			{movies.map(movie => (
				<MovieCard
					key={movie.id}
					{...movie}
				/>
			))}
		</div>
	);
};

export default Cards;
