import { Chip } from "@nextui-org/react";
import { BsFillPlayFill } from "react-icons/bs";

const Recommended = () => {
	return (
		<Chip
			startContent={<BsFillPlayFill size={20} />}
			className="text-[#99daee] bg-hidden">
			<span className="text-white">Recommended</span>
		</Chip>
	);
};
export default Recommended;
