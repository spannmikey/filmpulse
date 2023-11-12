import React from "react";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";

import { Providers } from "./providers";

import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: ["500", "700"], subsets: ["latin"] });

export const metadata = {
	title: "Filmpulse",
	description: "Movie viewing web app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Providers>
					<main className="app">
						<Nav />
						{children}
						{/* <Footer /> */}
					</main>
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
