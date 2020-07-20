import React, { Component } from "react";

import Table from "../elements/customTable";
import { Link } from "react-router-dom";

export default class payroll extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const datas = [
			{
				info: "Congratulations! You’ve successfully created an account.",
				Recipients: "20",
				Openrate: "20%",
				Clickrate: "20",
			},
			{
				info: "Congratulations! You’ve successfully created an account.",
				Recipients: "20",
				Openrate: "20%",
				Clickrate: "20",
			},
			{
				info: "Congratulations! You’ve successfully created an account.",
				Recipients: "20",
				Openrate: "20%",
				Clickrate: "20",
			},
			{
				info: "Congratulations! You’ve successfully created an account.",
				Recipients: "20",
				Openrate: "20%",
				Clickrate: "20",
			},
			{
				info: "Congratulations! You’ve successfully created an account.",
				Recipients: "20",
				Openrate: "20%",
				Clickrate: "20",
			},
		];
		const body = datas.map((data, index) => ({
			info: data.info,
			Recipients: data.Recipients,

			Openrate: data.Openrate,
			Clickrate: data.Clickrate,
			PayableMonth: data.payableMonths,

			action: (
				<a>
					<Link to="/payroll-form">
						{" "}
						<span
							className="edit"
							style={{ color: " #0D0D0D", fontSize: "20px" }}
							// onClick={() => this.props.handleEdit(data.id)}
							// data-backdrop="static"
							className="fa fa-eye mr-4 add-cursor"
						></span>
					</Link>

					<span
						style={{ color: " #F00A0A", fontSize: "18px" }}
						className="del"
						// onClick={() => this.props.handleDelete(data.id)}
						className="fa fa-trash mr-4 add-cursor"
					></span>
				</a>
			),
		}));
		return body;
	};

	header = () => {
		const header = [
			{
				title: "Reports (filterable)",
				prop: "info",
				sortable: true,
				filterable: true,
			},
			{ title: "Recipients", prop: "Recipients" },

			{ title: "Open Rate", prop: "Openrate" },

			{ title: "Click Rate", prop: "Clickrate" },

			{ title: "Actions", prop: "action" },
		];
		return header;
	};

	render() {
		return (
			<div className="table-responsivee">
				<Table
					body={this.bodyRow}
					head={this.header}
					rowsPerPage={1}
					rowsPerPageOption={[10, 15, 20, 25]}
				/>
			</div>
		);
	}
}
