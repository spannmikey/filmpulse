import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const Cards = () => {
	return (
		<div className="flex gap-6">
			<Card
				isFooterBlurred
				radius="lg"
				className="border-none ">
				<Image
					alt="Woman listing to music"
					className="object-cover"
					height={200}
					src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png"
					width={200}
				/>
				<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
					<p className="text-tiny text-white/80">Batman</p>
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
		</div>
	);
};

export default Cards;
