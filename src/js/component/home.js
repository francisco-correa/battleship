import React from "react";
import BoardGame from "../component/board";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import battleShip from "../../img/battleShip.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<p>
				<img
					style={{
						width: "300px",
						height: "200px",
						borderRadius: "5px"
					}}
					src={battleShip}
				/>
			</p>
			<h1>Battle Ship Game</h1>
			<div>
				<BoardGame></BoardGame>
			</div>
			<p>
				Made by{" "}
				<a href="https://github.com/francisco-correa">
					Francisco Correa
				</a>
				, with <i style={{ color: "red" }} className="fas fa-heart"></i>
			</p>
		</div>
	);
}
