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
import { AutoresponderEmailModal } from "../elements/Modals";
import Layout from "../elements/Layout/Layout";
export const AutoresponderEmail = () => {
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
						<div className="app-content">
							<section className="section">
								<div className="row">
									<div className="container">
										<div className="col-lg-12 autoresponder-header">
											<h3>Autoresponse Email</h3>
										</div>
										<div className="col-lg-5 margin-bottom pt-4">
											<button
												className="btn btn-primary p-2 mb-3"
												data-toggle="modal"
												data-target="#addNewSeries"
											>
												Add a new Serieshhh gdhdh
											</button>
											<p style={{ fontSize: "18px" }}>
												No autoresponse email series created yet.
											</p>
											<div className="report-container">
												<div>
													<h5>Autoresponder name</h5>
													<p>Series of 0 email over 1 day</p>
													<p>100 Subscribers | 0% Click rate | 0% Open rate</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>

							<AutoresponderEmailModal />
						</div>
					</Layout>
				</div>
			</div>
		</>
	);
};
