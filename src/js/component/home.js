import React from "react";
import BoardGame from "../component/board";
import FireShot from "../component/fire";
import ShowShips from "../component/showShips";
import battleShip from "../../img/battleShip.jpg";

export function Home() {
	return (
		<div className="text-center mt-2">
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
			<h1>BattleShip Board Game</h1>
			<div>
				<BoardGame></BoardGame>
			</div>
			<p>
				<div>
					<div className="row">
						<div className="col">
							<FireShot></FireShot>
						</div>
						<div className="col">
							<ShowShips></ShowShips>
						</div>
					</div>
				</div>
				Made by{" "}
				<a href="https://github.com/francisco-correa">
					Francisco Correa
				</a>
				, with <i style={{ color: "red" }} className="fas fa-heart"></i>
			</p>
		</div>
	);
}
