import React from "react";

const FireShot = () => {
	return (
		<div>
			<div>
				<button
					type="button"
					className="btn btn-danger btn-lg"
					style={{ width: "100px" }}
					data-toggle="modal"
					data-target="#exampleModal"
					data-whatever="@mdo">
					Fire
				</button>
			</div>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Please add coordinates letter and number
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group">
									<label
										htmlFor="recipient-name"
										className="col-form-label">
										Coordinates letter and number
									</label>
									<input
										type="text"
										className="form-control"
										id="recipient-name"
										placeholder="A7"
									/>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-danger">
								Fire !!!
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FireShot;
