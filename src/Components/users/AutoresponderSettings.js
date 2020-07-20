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
import Layout from "../elements/Layout/Layout";
export const AutoresponderSettings = () => {
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
					<Layout>
						<div class="app-content">
							<section class="section">
								<div class="row">
									<div class="container">
										<div class="col-lg-12 autoresponder-header">
											<h3>Autoresponder name</h3>
										</div>
										<div class="col-lg-12 pt-4">
											<div class="row">
												<div class="col-lg-10 pr-5">
													<div>
														<p>
															A verification is required to add a new email
															asdress. Look out for a verification link in your
															business!
														</p>
														<p class="note-info">
															Note that mails will not be sent if you choose an
															unverified email as your sender address. Yahoo.com
															and icloud.com are not advised for sender email
															address.
														</p>
													</div>
													<div>
														<form class="form-horizontal">
															<div class="row form-group ">
																<label class="col-lg-2 col-sm-12 pt-3">
																	Email List :{" "}
																</label>
																<select class="form-control payment-input col-lg-10 col-sm-12">
																	<option>--Select An Email Address--</option>
																	<option>peace@gmail.com</option>
																	<option>gift@gmail.com</option>
																</select>
															</div>
															<div class="row form-group ">
																<label class="col-lg-2 col-sm-12 pt-3">
																	Sender Email :{" "}
																</label>
																<select class="form-control payment-input col-lg-10 col-sm-12">
																	<option>--Select An Email Address--</option>
																	<option>peace@gmail.com</option>
																	<option>gift@gmail.com</option>
																</select>
															</div>
															<div
																class="col-lg-12 margin-bottom pt-4"
																style={{ textAlign: "center" }}
															>
																<button class="btn btn-primary p-2 mr-3">
																	Back
																</button>
																<button class="btn btn-outline-primary p-2">
																	Save Changes
																</button>
															</div>
														</form>
													</div>
												</div>
												<div class="col-lg-2">
													<button class="btn btn-default delete-autoresponder">
														Delete Autoresponse
													</button>
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
