import { Card, CardFooter, Image, Button } from "@nextui-org/react";

// ... (import statements)

const MovieCard = ({ title, poster_path }) => {
	return (
		<Card
			isFooterBlurred
			radius="lg"
			className="border-none"
			style={{ width: "200px", height: "300px" }}>
			<Image
				alt={title}
				className="object-cover w-fit h-fit"
				height={200}
				src={`https://image.tmdb.org/t/p/original/${poster_path}`}
				width={200}
			/>
			<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
				<p className="text-tiny text-white/80">{title}</p>
				<Button
					className="text-tiny text-white bg-black/20"
					variant="flat"
					color="default"
					radius="lg"
					size="sm">
					View
				</Button>
			</CardFooter>
		</Card>
	);
};

export default MovieCard;
