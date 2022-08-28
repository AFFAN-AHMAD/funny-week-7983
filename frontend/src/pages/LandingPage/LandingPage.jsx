import MainPage from "./MainPage/MainPage";
import ScrollToTop from "react-scroll-to-top";

import { ArrowUpIcon } from "@chakra-ui/icons";
import Footer from "../../components/Footer/Footer";

import Navbar from "../../components/Navbar/Navbar";

export default function LandingPage() {
	return (
		<div>
			<Navbar/>
			<MainPage />

			<ScrollToTop
				style={{
					borderRadius: "50%",
					height: "45px",
					width: "45px",
					padding: "0px",
					margin: "0px",
				}}
				smooth
				component={<ArrowUpIcon fontSize={"xl"} />}
			/>
			<Footer/>
		</div>
	);
}
