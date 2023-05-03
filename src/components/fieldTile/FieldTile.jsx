import React, { useState } from "react";

import "./FieldTile.css";

const FieldTile = ({ tile }) => {
	const [planted, setPlanted] = useState(false);
	// get color for tile
	const getColorForTile = (tile) => {
		let color;

		switch (tile) {
			case "W":
				color = "blue";
				break;
			case "L":
				color = "bisque";
				break;
			case "F":
				color = "green";
				break;
			default:
				color = "brown";
		}

		return color;
	};

	return (
		<div
			className="fieldTile"
			style={{ backgroundColor: planted ? "yellow" : getColorForTile(tile) }}
			onClick={() => {
				if (tile === "L") {
					setPlanted(true);
				}
			}}
		>
			{" "}
			{tile}{" "}
		</div>
	);
};

export default FieldTile;
