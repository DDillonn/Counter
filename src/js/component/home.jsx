import React from "react";
import Clock from "./Clock";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Clock />
		</div>
	);
};

export default Home;
