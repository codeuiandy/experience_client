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

export const CreateAutoresponder = () => {
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
									<div className="col-lg-12 text-right mt-4">
										<button className="btn btn-primary p-2 mr-2">
											Existing Email Series
										</button>
										<button className="btn btn-secondary p-2 mr-2">
											Reports
										</button>
										<button className="btn btn-outline-primary p-2">
											Setting
										</button>
									</div>
									<div className="col-lg-12">
										<div className="autoresponder-form">
											<form>
												<div className="form-group">
													<label>Sender:</label>
													<input
														type="text"
														className="form-control payment-input"
														placeholder="opeyemiemma@gmail.com"
													/>
												</div>
												<div className="form-group">
													<label>Subject:</label>
													<input
														type="text"
														className="form-control payment-input"
														placeholder="Enter Email Subject.."
													/>
												</div>
												<div className="form-group">
													<label>Body:</label>
												</div>
												<div className="form-group input-group pt-5">
													<div className="col-lg-6 col-sm-12">
														<label>Email Contact List</label>
														<select className="form-control payment-input">
															<option>--Select Email Contact List--</option>
															<option>All</option>
															<option>Harvard List</option>
															<option>Wedding List</option>
															<option>Designer's List</option>
															<option>Facebook List</option>
															<option>Real estate List</option>
														</select>
													</div>
													<div className="col-lg-6 col-sm-12 p-0">
														<label>When do you want to send this email?</label>
														<select className="form-control payment-input">
															<option>Immediately</option>
															<option>10 mins</option>
															<option>30 mins</option>
															<option>1 hour</option>
															<option>24 hours</option>
														</select>
													</div>
												</div>
												<div className="col-lg-12 margin-bottom text-right pt-4 pr-0">
													<button className="btn btn-outline-primary p-2 mr-2">
														Back
													</button>
													<button className="btn btn-primary p-2">Done</button>
												</div>
											</form>
										</div>
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
