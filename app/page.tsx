import GenreLinks from "@components/GenreLinks";
import Recommended from "@components/Recommended";
import TopMovie from "@components/TopMovie";
import Cards from "@components/Cards";
import AllMovies from "@components/AllMovies";

const Home = () => {
	return (
		// add some image to this
		<div className="pb-12">
			<div className="pb-36 border-t-[1px] border-[rgba(216, 216, 216, 0.45)] bg-black">
				<section className="mt-36 w-9/12 mx-auto">
					<TopMovie />
				</section>
			</div>
			<section className="mt-8 w-9/12 mx-auto">
				<GenreLinks />
			</section>
			<section className="mt-12 w-9/12 mx-auto">
				<Recommended />
				<div className="w-fit mt-6">
					<Cards />
				</div>
				<div className="w-fit mt-6">
					<AllMovies />
				</div>
			</section>
		</div>
	);
};
export default Home;
