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
import { Bar, Doughnut } from "react-chartjs-2";
import Layout from "../elements/Layout/Layout";
export const EventDetails = () => {
	const [events, setEvent] = useState([]);
	const [processing_user_info, setProcessingInfoStatus] = useState(true);
	const [processing_events, setEventProcessStatus] = useState(true);
	const [{ full_name }, setUserInformation] = useState({
		full_name: "",
	});
	const [totalpaymentChart, setTotalPaymentChart] = useState({});
	const [attendeeChart, setattendeeChart] = useState({});
	const chartTotalPayment = () => {
		setTotalPaymentChart({
			labels: ["Regular", "Exhibitor", "Media", "Organization"],
			datasets: [
				{
					label: ["Payment Chart"],
					data: [100, 80, 70, 60],
					backgroundColor: ["#1E9682", " #66BAED", "#FBD11F", "#F74F4F"],
					borderWidth: 4,
				},
			],
		});
	};
	const attendeeCharts = () => {
		setattendeeChart({
			labels: ["Avalable Attendies"],
			datasets: [
				{
					data: [20],
					backgroundColor: ["#CC2E43"],
					borderWidth: 1,
				},
			],
		});
	};
	useEffect(() => {
		chartTotalPayment();
		attendeeCharts();
	}, []);
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
					<Layout>
						{" "}
						<div className="app-content">
							<section className="section event_details">
								<div className="row">
									<div className="col-lg-12 col-sm-12 col-md-12">
										<div className="row">
											<div className="col-lg-12">
												<div className="row">
													<div className="col-lg-1">
														<img src={flower_img} />
													</div>
													<div className="col-lg-6 text-right">
														<Link to="/user_dashboard">
															Return to Dashboard
														</Link>
													</div>
												</div>
											</div>

											<div className="input-group col-md-8 mt-2">
												<input
													className="form-control py-2 border-right-0 border"
													type="search"
													value="search"
													id="example-search-input"
												/>
												<span className="input-group-append">
													<button
														className="btn search btn-outline-secondary border-left-0 border"
														type="button"
													>
														<i className="fa fa-search"></i>
													</button>
												</span>
											</div>
											<br />
											<br />
										</div>

										<div className="row">
											<div className="col-lg-8">
												<h3 style={{ paddingTop: "20px" }}>
													<span className="bold">Events</span> : Havard
													Launcheon
												</h3>
												<div className="col-lg-6">
													<div className="row">
														<div className="col-lg-4">Pre-event</div>
														<div className="col-lg-4">During-Event</div>
														<div className="col-lg-4">Post-event</div>
													</div>
												</div>
											</div>
										</div>

										<div className="row margin-top">
											<div className="col-lg-8">
												<div className="card text-left">
													<div className="card-body">
														<h4>Total Payments</h4>
														<Bar
															// width={100}
															// height={100}
															data={totalpaymentChart}
															options={{
																responsive: true,
																legend: {
																	display: false,
																},

																scales: {
																	yAxes: [
																		{
																			ticks: {
																				beginAtZero: true,
																			},
																		},
																	],
																},
															}}
														/>
													</div>
												</div>
											</div>

											<div className="col-lg-3">
												<div className="card">
													<div className="card-body">
														<h5 className="card-subtitle">Today Orders</h5>
														<h2 className="font-medium text-primary m-t-20 m-b-20">
															<img src={attendees_img} />{" "}
															<span className="pull-right">26785</span>
														</h2>
													</div>
												</div>

												<div className="card">
													<div className="card-body">
														<div className="row mb-0">
															<div className="col-12">
																<div className="dash3 text-center">
																	<small className="text-muted mt-0">
																		% Check In : 70%
																	</small>
																	<br />
																</div>
															</div>
															<div className="col-12">
																<div
																	className="card-icon d-flex"
																	style={{
																		justifyContent: "center",
																		paddingTop: "40px",
																	}}
																>
																	<div className="box">
																		<div className="percentage">
																			<svg>
																				<circle cx="70" cy="70" r="70"></circle>
																				<circle
																					style={{
																						strokeDashoffset:
																							"calc(440 - (440 * 70) / 100)",
																						stroke: "#CC2E43",
																					}}
																					cx="70"
																					cy="70"
																					r="70"
																				></circle>
																			</svg>
																			<div className="atendeNumber">
																				<h2>70%</h2>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="col-lg-11 col-sm-12 col-md-10 exihib">
										<div className="row">
											<div className="col-lg-3">
												<div className="card">
													<div className="card-body">
														<h5 className="card-subtitle">Regular</h5>
														<h2 className="font-medium text-primary m-t-20 m-b-20">
															<img src={team_1_img} />{" "}
															<span className="pull-right">26785</span>
														</h2>
													</div>
												</div>
											</div>
											<div className="col-lg-3">
												<div className="card">
													<div className="card-body">
														<h5 className="card-subtitle">Exhibitors</h5>
														<h2 className="font-medium text-primary m-t-20 m-b-20">
															<img src={museum_img} />{" "}
															<span className="pull-right">500</span>
														</h2>
													</div>
												</div>
											</div>
											<div className="col-lg-3">
												<div className="card">
													<div className="card-body">
														<h5 className="card-subtitle">Media</h5>
														<h2 className="font-medium text-primary m-t-20 m-b-20">
															<img src={tv_img} />{" "}
															<span className="pull-right">500</span>
														</h2>
													</div>
												</div>
											</div>
											<div className="col-lg-3">
												<div className="card">
													<div className="card-body">
														<h5 className="card-subtitle">Organization</h5>
														<h2 className="font-medium text-primary m-t-20 m-b-20">
															<img src={team_2_img} />{" "}
															<span className="pull-right">500</span>
														</h2>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-lg-11 col-sm-12 col-md-10">
									<div className="row">
										<div className="col-lg-6 col-xl-6">
											<div className="card row">
												<div className="card-header">
													<h4>Ticket Sales</h4>
												</div>
												<div className="card-body">
													<div className="clearfix">
														<span className="float-left">Regular</span>
														<small className="float-right">80%</small>
													</div>
													<div className="card-progressbar">
														<div className="card-progressbar mb-0 mt-1">
															<div className="progress h-6">
																<div
																	style={{ background: "#27AE60" }}
																	className="progress-bar  w-70"
																	role="progressbar"
																></div>
															</div>
														</div>
													</div>
													<div className="clearfix mt-3">
														<span className="float-left">Standard</span>
														<small className="float-right">70%</small>
													</div>
													<div className="card-progressbar">
														<div className="progress h-6 mt-1">
															<div
																style={{ background: "#B63C5B" }}
																className="progress-bar  w-70"
																role="progressbar"
															></div>
														</div>
													</div>
													<div className="clearfix mt-3">
														<span className="float-left"> VIP</span>
														<small className="float-right">30%</small>
													</div>
													<div className="card-progressbar">
														<div className="progress h-6 mt-1">
															<div
																style={{ background: "#3C96D1" }}
																className="progress-bar  w-30"
																role="progressbar"
															></div>
														</div>
													</div>
													<div className="clearfix mt-3">
														<span className="float-left">Premium</span>
														<small className="float-right">30%</small>
													</div>
													<div className="card-progressbar">
														<div className="progress h-6 mt-1">
															<div
																style={{ background: "#FBD11F" }}
																className="progress-bar  w-30"
																role="progressbar"
															></div>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div className="col-lg-6 col-xl-6 col-md-6 col-6">
											<div className="row">
												<div className="col-lg-12">
													<div className="card">
														<div className="card-body">
															<h5 className="card-subtitle">Regular</h5>
															<h2 className="font-medium text-primary m-t-20 m-b-20">
																<img src={team_1_img} />{" "}
																<span className="pull-right">26785</span>
															</h2>
														</div>
													</div>
												</div>
											</div>

											<div className="row">
												<div className="col-lg-6">
													<div className="card">
														<div className="card-body">
															<h5 className="card-subtitle">Regular</h5>
															<h2 className="font-medium text-primary m-t-20 m-b-20">
																<img src={team_1_img} />{" "}
																<span className="pull-right">26785</span>
															</h2>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="card">
														<div className="card-body">
															<h5 className="card-subtitle">Regular</h5>
															<h2 className="font-medium text-primary m-t-20 m-b-20">
																<img src={team_1_img} />{" "}
																<span className="pull-right">26785</span>
															</h2>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-lg-11 col-sm-12">
										<div className="card">
											<div className="card-header">
												<h4>All Attendees</h4>
											</div>
											<div className="card-body">
												<div className="table-responsive">
													<table className="table table-bordered text-nowrap mb-0">
														<thead>
															<tr>
																<th>S/N</th>
																<th>Attendee Type</th>
																<th>Session Name</th>
																<th>First Name</th>
																<th>Last Name</th>
																<th>Email Address</th>
																<th>Checked in</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>#01</td>
																<td>Sean Black</td>
																<td>PRO12345</td>
																<td>Mi LED Smart TV 4A 80</td>
																<td>$14,500</td>
																<td>Online Payment</td>
																<td>
																	<span className="badge badge-success">
																		Delivered
																	</span>
																</td>
															</tr>
															<tr>
																<td>#02</td>
																<td>Evan Rees</td>
																<td>PRO8765</td>
																<td>
																	Thomson R9 122cm (48 inch) Full HD LED TV{" "}
																</td>
																<td>$30,000</td>
																<td>Cash on delivered</td>
																<td>
																	<span className="badge badge-primary">
																		Add Cart
																	</span>
																</td>
															</tr>
															<tr>
																<td>#03</td>
																<td>David Wallace</td>
																<td>PRO54321</td>
																<td>Vu 80cm (32 inch) HD Ready LED TV</td>
																<td>$13,200</td>
																<td>Online Payment</td>
																<td>
																	<span className="badge badge-orange">
																		Pending
																	</span>
																</td>
															</tr>
															<tr>
																<td>#04</td>
																<td>Julia Bower</td>
																<td>PRO97654</td>
																<td>Micromax 81cm (32 inch) HD Ready LED TV</td>
																<td>$15,100</td>
																<td>Cash on delivered</td>
																<td>
																	<span className="badge badge-cyan">
																		Delivering
																	</span>
																</td>
															</tr>
															<tr>
																<td>#05</td>
																<td>Kevin James</td>
																<td>PRO4532</td>
																<td>
																	HP 200 Mouse & Wireless Laptop Keyboard{" "}
																</td>
																<td>$5,987</td>
																<td>Online Payment</td>
																<td>
																	<span className="badge badge-danger">
																		Shipped
																	</span>
																</td>
															</tr>
															<tr>
																<td>#06</td>
																<td>Theresa Wright</td>
																<td>PRO6789</td>
																<td>Digisol DG-HR3400 Router </td>
																<td>$11,987</td>
																<td>Cash on delivered</td>
																<td>
																	<span className="badge badge-secondary">
																		Delivering
																	</span>
																</td>
															</tr>
															<tr>
																<td>#07</td>
																<td>Sebastian Black</td>
																<td>PRO4567</td>
																<td>Dell WM118 Wireless Optical Mouse</td>
																<td>$4,700</td>
																<td>Online Payment</td>
																<td>
																	<span className="badge badge-info">
																		Add to Cart
																	</span>
																</td>
															</tr>
															<tr>
																<td>#08</td>
																<td>Kevin Glover</td>
																<td>PRO32156</td>
																<td>Dell 16 inch Laptop Backpack </td>
																<td>$678</td>
																<td>Cash On delivered</td>
																<td>
																	<span className="badge badge-pink">
																		Delivered
																	</span>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
						</div>
					</Layout>
				</div>
			</div>
		</>
	);
};
