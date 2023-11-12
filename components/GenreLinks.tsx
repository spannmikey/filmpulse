import Link from "next/link";
import { Chip } from "@nextui-org/react";

const GenreLinks = () => {
	return (
		<article>
			<div className="flex flex-1 flex-wrap gap-4 border-b-2 pb-6 w-full">
				<Link href="/action">
					<Chip className="bg-[#99daee] text-white">Action</Chip>
				</Link>
				<Link href="/comedy">
					<Chip className="bg-[#99daee] text-white">Comedy</Chip>
				</Link>
				<Link href="/adventure">
					<Chip className="bg-[#99daee] text-white">Adventure</Chip>
				</Link>
				<Link href="/drama">
					<Chip className="bg-[#99daee] text-white">Drama</Chip>
				</Link>
				<Link href="/animation">
					<Chip className="bg-[#99daee] text-white">Animation</Chip>
				</Link>
				<Link href="/fantasy">
					<Chip className="bg-[#99daee] text-white">Fantasy</Chip>
				</Link>
				<Link href="/horror">
					<Chip className="bg-[#99daee] text-white">Horror</Chip>
				</Link>
			</div>
		</article>
	);
};
export default GenreLinks;
