import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { BsFillPlayFill } from "react-icons/bs";

const TopMovie = () => {
	return (
		<article className="flex flex-col gap-y-3 ">
			<Chip className="bg-[#99daee] text-white">Top</Chip>
			<h1 className="text-6xl">Spider man no way home</h1>
			<p className="lg:w-1/2">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
				mollitia at debitis iste, officia dolore reiciendis numquam molestiae,
				excepturi soluta minima ad voluptatibus dolorum sequi! Autem voluptates
				est ipsum corporis?
			</p>
			<div className="flex gap-x-2">
				<span>2022 |</span>
				<span className="text-[#99daee]">16+</span>
				<span>| 1 Season |</span>
				<span>TV series for teenagers</span>
			</div>
			<div className="flex gap-x-2 items-center">
				{/* change to star icon */}
				<span>⭐</span>
				<span className="font-bold text-lg">5.8</span>
				<span>
					Season <span className="text-[#99daee]">1</span>
				</span>
				<span>
					Episode <span className="text-[#99daee]">1</span>
				</span>
				<span>
					Genre : <span>comedy, detective</span>
				</span>
			</div>

			<Link href="/featureNotMadeYet">
				<Chip
					startContent={<BsFillPlayFill size={20} />}
					variant="shadow"
					className="text-white bg-[#99daee] py-[1.5rem] px-8 mt-6">
					Chip
				</Chip>
			</Link>
		</article>
	);
};
export default TopMovie;
