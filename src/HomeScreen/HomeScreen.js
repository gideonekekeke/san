import React from "react";
import Allsale from "../AllSale/Allsales";

import DownPut from "../DownPut/DownPut";
import DSlider from "../DSlider/DSlider";
import FeaturePage from "../FeaturePage";
import WelcomePage from "../WelcomePage";

const HomeScreen = () => {
	return (
		<div>
			<DSlider />
			<WelcomePage />

			<Allsale />
			<FeaturePage />

			<DownPut />
		</div>
	);
};

export default HomeScreen;
