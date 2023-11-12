import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";

import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["500", "700"], subsets: ["latin"] });

export const metadata = {
	title: "Filmpulse",
	description: "Movie viewing web app",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<main className="app">
					<Nav />
					{children}
					{/* <Footer /> */}
				</main>
			</body>
		</html>
	);
};

export default RootLayout;
