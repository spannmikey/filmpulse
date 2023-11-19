import { Image } from "@nextui-org/react";

const Custom404 = () => {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen ">
			<Image
				src="https://media.giphy.com/media/vAwu7cra0CBqo0ATyx/giphy.gif"
				alt="mole 404 image"
				width={500}
				height={500}
			/>
			<h3>Uh-oh something went wrong.</h3>
		</div>
	);
};
export default Custom404;