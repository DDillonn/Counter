import propTypes from "prop-types";
import React from "react";

const Clock = (props) => {
	let counter = "000000";
	let result = counter.split("");
	// console.log(result);
	return counter;
};
Clock.propTypes = {
	timeInterval: propTypes.string,
};
export default Clock;
