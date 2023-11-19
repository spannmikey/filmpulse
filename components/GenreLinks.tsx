import Link from "next/link";
import { Chip } from "@nextui-org/react";

const GenreLinks = () => {
	return (
		<article>
			<div className="flex flex-1 flex-wrap gap-4 border-b-2 pb-6 w-full">
				<Link href="/action">
					<Chip className="text-white bg-[#99daee] py-[0.5rem] px-8 mt-6 hover:bg-transparent border-2 transition-all ease-in-out delay-150">
						Action
					</Chip>
				</Link>
				<Link href="/comedy">
					<Chip className="text-white bg-[#99daee] py-[0.5rem] px-8 mt-6 hover:bg-transparent border-2 transition-all ease-in-out delay-150">
						Comedy
					</Chip>
				</Link>
				<Link href="/adventure">
					<Chip className="text-white bg-[#99daee] py-[0.5rem] px-8 mt-6 hover:bg-transparent border-2 transition-all ease-in-out delay-150">
						Adventure
					</Chip>
				</Link>
				<Link href="/drama">
					<Chip className="text-white bg-[#99daee] py-[0.5rem] px-8 mt-6 hover:bg-transparent border-2 transition-all ease-in-out delay-150">
						Drama
					</Chip>
				</Link>
				<Link href="/animation">
					<Chip className="text-white bg-[#99daee] py-[0.5rem] px-8 mt-6 hover:bg-transparent border-2 transition-all ease-in-out delay-150">
						Animation
					</Chip>
				</Link>
				<Link href="/fantasy">
					<Chip className="text-white bg-[#99daee] py-[0.5rem] px-8 mt-6 hover:bg-transparent border-2 transition-all ease-in-out delay-150">
						Fantasy
					</Chip>
				</Link>
				<Link href="/horror">
					<Chip className="text-white bg-[#99daee] py-[0.5rem] px-8 mt-6 hover:bg-transparent border-2 transition-all ease-in-out delay-150">
						Horror
					</Chip>
				</Link>	
			</div>
		</article>
	);
};
export default GenreLinks;
