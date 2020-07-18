import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../elements/Sidebar";
import { MainFooter } from "../elements/Footer";
import { Navbar } from "../elements/Navbar";
import flower_img from "../../img/flower.png";
import attendees_img from "../../img/attendee.png";
import team_1_img from "../../img/team1.png";
import museum_img from "../../img/museum.png";
import tv_img from "../../img/tv.png";
import team_2_img from "../../img/team2.png";
import add_event_img from "../../img/add.png";
import { handleGetRequestsWithToken } from "../elements/TaskHandlers";
import { get_user_events_url } from "../elements/Routes";
import ReportsTable from "../Tablees/reportsTable";
export const AutoresponderReport = () => {
	const [events, setEvent] = useState([]);
	const [processing_user_info, setProcessingInfoStatus] = useState(true);
	const [processing_events, setEventProcessStatus] = useState(true);
	const [{ full_name }, setUserInformation] = useState({
		full_name: "",
	});

	// useEffect(()=>{
	//     let {user} = JSON.parse(localStorage.getItem('user_information'));
	//     setUserInformation({full_name : user.name});
	//     // handleGetRequestsWithToken(`${get_user_events_url}?${user_information}`).then(res => {
	//     //     console.log();
	//     // });
	// },[

	// ]);
	return (
		<>
			<div id="app">
				<div className="main-wrapper">
					<Navbar />
					<Sidebar />
					<div className="app-content">
						<section className="section">
							<div className="row">
								<div className="container">
									<div className="col-lg-12 autoresponder-header">
										<h3>Autoresponder name</h3>
									</div>
									<div className="col-lg-12 pt-4">
										<div>
											<h4 style={{ fontWeight: "600", color: "#0D0D0D" }}>
												{" "}
												All Reports
											</h4>
										</div>
										<div className="report-container">
											<div className="row">
												<div className="col-lg-12 pl-5 pr-5">
													<div>
														<ReportsTable />
														{/* <table
															id="example"
															className="table table-bordered text-nowrap w-100"
														>
															<thead>
																<tr>
																	<th className="wd-15p">S/N</th>
																	<th className="wd-15p">Report</th>
																	<th className="wd-20p">Actions</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>1</td>
																	<td>
																		<p>
																			Congratulations! You've successfully
																			created an account.
																		</p>
																		<p>
																			10 Recipients 0% Open Rate 0% Click Rate
																		</p>
																	</td>
																	<td
																		style={{ textAlign: "center" }}
																		className="pt-4"
																	>
																		<i
																			className="fa fa-eye eye-icon"
																			aria-hidden="true"
																		></i>
																		<i
																			className="fa fa-trash trash-icon"
																			aria-hidden="true"
																		></i>
																	</td>
																</tr>
															</tbody>
														</table> */}
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-12 margin-bottom pt-4 text-right">
										<button className="btn btn-primary p-2 mr-3">Back</button>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
			<MainFooter />
		</>
	);
};
