import React, { useState } from "react";
import "../../styles/index.scss";

const BoardGame = () => {
	const [count, setCount] = useState(0);
	// const [color, setColor] = useState(" ");

	const increase = () => {
		setCount(count + 1);
		console.log(count + 1);
	};

	let rows = 9;
	let columns = 9;
	let gameSize = 81;

	// 0 = "empty space";
	// 1 = "part of the ship";
	// 2 = "fire or sunken part of the ship";
	// 3 = "shoot in the water or missed shot";

	// let board = [
	// 	[0, 0, 0, 1, 1, 1, 1, 0, 0],
	// 	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	// 	[0, 0, 0, 0, 0, 0, 1, 0, 0],
	// 	[0, 0, 0, 0, 0, 0, 1, 0, 0],
	// 	[1, 0, 0, 0, 0, 1, 1, 1, 1],
	// 	[1, 0, 0, 0, 0, 0, 0, 0, 0],
	// 	[1, 0, 0, 1, 0, 0, 0, 0, 0],
	// 	[1, 0, 0, 1, 0, 0, 0, 0, 0],
	// 	[1, 0, 0, 0, 0, 0, 0, 0, 0]
	// ];

	// if (board [x][y] == 0) {
	//     water color
	// }

	// else if  (board [x][y] == 1) {
	//      fire color
	//  }

	// if (count == 17) {
	// 	alert("Congratulatons you win");
	// } else if (count > 17) {
	// 	alert("Sorry you lose, try again");
	//  }
	// else {
	// 	alert("Sorry you lose, try again");
	// }

	// else if hit el mismo lugar
	// alert("you shot in the same place")

	return (
		<div className="container">
			<div className="row">
				<h1 className="col" style={{ color: "red" }}>
					<i className="fas fa-bullseye"></i> {count}
				</h1>
			</div>
			<div className="row file">
				<div className="col">
					<i className="fas fa-ship"></i>
				</div>
				<div className="col">1</div>
				<div className="col">2</div>
				<div className="col">3</div>
				<div className="col">4</div>
				<div className="col">5</div>
				<div className="col">6</div>
				<div className="col">7</div>
				<div className="col">8</div>
				<div className="col">9</div>
			</div>
			<div className="row file" onClick={increase}>
				<div className="col">A</div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
			</div>
			<div className="row file" onClick={increase}>
				<div className="col">B</div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
			</div>
			<div className="row file" onClick={increase}>
				<div className="col">C</div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
			</div>
			<div className="row file" onClick={increase}>
				<div className="col">D</div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
			</div>
			<div className="row file" onClick={increase}>
				<div className="col">E</div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
			</div>
			<div className="row file" onClick={increase}>
				<div className="col">F</div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
			</div>
			<div className="row file" onClick={increase}>
				<div className="col">G</div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
			</div>
			<div className="row file" onClick={increase}>
				<div className="col">H</div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
			</div>
			<div className="row file" onClick={increase}>
				<div className="col">I</div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
				<div className="col grid"></div>
			</div>
		</div>
	);
};

export default BoardGame;
