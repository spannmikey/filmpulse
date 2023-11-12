import Link from "next/link";

const Nav = () => {
	return (
		<nav className="w-full bg=transparent flex items-center justify-between px-12 pt-[28px] pb-8 border-b-[.5px] border-[rgba(216, 216, 216, 0.45)]">
			<Link
				href="/"
				className="text-[#99daee] uppercase tracking-wider ">
				Filmpulse
			</Link>
			<div className="flex gap-4">
				<Link
					href="/"
					className="uppercase tracking-wider hover:text-[#99daee] transition-all ease-in-out duration-600 ">
					Home
				</Link>
				<Link
					href="/movies"
					className="uppercase tracking-wider hover:text-[#99daee] transition-all ease-in-out duration-600 ">
					Movies
				</Link>
				<Link
					href="/series"
					className="uppercase tracking-wider hover:text-[#99daee] transition-all ease-in-out duration-600 ">
					Series
				</Link>
				<Link
					href="/mylist"
					className="uppercase tracking-wider hover:text-[#99daee] transition-all ease-in-out duration-600 ">
					My List
				</Link>
				{/* Add search bar  */}
			</div>
		</nav>
	);
};
export default Nav;
