import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { BsFillPlayFill } from "react-icons/bs";

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
			"https://api.themoviedb.org/3/movie/popular",
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

const TopMovie = async () => {
	const topRatedMovies = await getTopRatedMovies();
	const movie = topRatedMovies.results[0];

	return (
		<article className="flex flex-col gap-y-3">
			<Chip className="bg-[#99daee] text-white">Top</Chip>
			<div>
				<h1 className="text-6xl mb-6">{movie.title}</h1>
				<p className="lg:w-1/2">{movie.overview}</p>
			</div>

			<Link href="/featureNotMadeYet">
				<Chip
					startContent={<BsFillPlayFill size={20} />}
					variant="shadow"
					className="text-white bg-[#99daee] py-[1.5rem] px-8 mt-6 hover:bg-transparent border-2 transition-all ease-in-out delay-150">
					Watch
				</Chip>
			</Link>
		</article>
	);
};
export default TopMovie;
