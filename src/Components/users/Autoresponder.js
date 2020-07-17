import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {Sidebar} from '../elements/Sidebar';
import {MainFooter} from '../elements/Footer';
import {Navbar} from '../elements/Navbar';
import flower_img from '../../img/flower.png';
import attendees_img from '../../img/attendee.png';
import team_1_img from '../../img/team1.png';
import museum_img from '../../img/museum.png';
import tv_img from '../../img/tv.png';
import team_2_img from '../../img/team2.png';
import add_event_img from '../../img/add.png';
import {handleGetRequestsWithToken} from '../elements/TaskHandlers';
import {get_user_events_url} from '../elements/Routes';


export const Autoresponder = () => {
    const [events,setEvent] = useState([]);
    const [processing_user_info,setProcessingInfoStatus] =  useState(true);
    const [processing_events,setEventProcessStatus] = useState(true);
    const [{full_name},setUserInformation] = useState({
        full_name : ''
    });

    useEffect(()=>{
        let {user} = JSON.parse(localStorage.getItem('user_information'));
        setUserInformation({full_name : user.name});
        // handleGetRequestsWithToken(`${get_user_events_url}?${user_information}`).then(res => {
        //     console.log();
        // });
    },[

    ]);
    return(
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
								<div className="col-lg-12 autoresponder-body">
									<h5>Report: Congratulations! You've successfully created on account</h5>
									<div className="autoresponder-tab">
										<ul className="nav nav-tabs" id="myTab" role="tablist">
											<li className="nav-item">
												<a className="nav-link active" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" data-toggle="tab" href="#email" role="tab" aria-controls="email" aria-selected="false">Email Content</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" data-toggle="tab" href="#link" role="tab" aria-controls="link" aria-selected="false">Links & Clicks</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" data-toggle="tab" href="#open" role="tab" aria-controls="open" aria-selected="false">Opens</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" data-toggle="tab" href="#unsubscribed" role="tab" aria-controls="unsubscribed" aria-selected="false">Unsubscribed</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" data-toggle="tab" href="#bounce" role="tab" aria-controls="bounce" aria-selected="false">Bounce</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" data-toggle="tab" href="#spams" role="tab" aria-controls="spams" aria-selected="false">Spams</a>
											</li>
										</ul>
										<div className="tab-content  p-3" id="myTabContent">
											<div className="tab-pane fade show active p-0" id="overview" role="tabpanel" aria-labelledby="overview-tab">
												<div className="row pt-5">
													<div className="col-lg-4 col-md-6 col-12">
														<div className="card">
															<div className="card-body text-center">
																<div class ="plan-ball">3</div>
																<div><h6>Recipients</h6></div>
															</div>
														</div>
													</div>
													<div className="col-lg-4 col-md-6 col-12">
														<div className="card">
															<div className="card-body text-center">
																<div class ="plan-ball">0%</div>
																<div><h6>Unique Clicks</h6></div>
															</div>
														</div>
													</div>
													<div className="col-lg-4 col-md-6 col-12">
														<div className="card">
															<div className="card-body text-center">
																<div class ="plan-ball">0%</div>
																<div><h6>Open Rate</h6></div>
															</div>
														</div>
													</div>
													<div className="col-lg-4 col-md-6 col-12">
														<div className="card">
															<div className="card-body text-center">
																<div class ="plan-ball">0%</div>
																<div><h6>Unsubscribed</h6></div>
															</div>
														</div>
													</div>
													<div className="col-lg-4 col-md-6 col-12">
														<div className="card">
															<div className="card-body text-center">
																<div class ="plan-ball">0%</div>
																<div><h6>Bounced</h6></div>
															</div>
														</div>
													</div>
													<div className="col-lg-4 col-md-6 col-12">
														<div className="card">
															<div className="card-body text-center">
																<div class ="plan-ball">0%</div>
																<div><h6>Spam</h6></div>
															</div>
														</div>
													</div>
													<div className="col-12 col-md-12 col-lg-12">
														<div className="card overflow-hidden" style={{border:'none'}}>
															<div className="card-header">
																<h4>Activities</h4>
															</div>
															<div className="card-body">
																<div className="">
																	<canvas id="canvashbar" className="overflow-hidden"></canvas>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="tab-pane fade p-0" id="email" role="tabpanel" aria-labelledby="email-tab">
												<h6 style={{paddingTop: '20px', color: '#463c3c',fontSize: '18px'}}>Congratulations! You've successfully created an account.</h6>
												<hr/>
												<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
											</div>
											<div className="tab-pane fade p-0" id="link" role="tabpanel" aria-labelledby="link-tab">
												<div className="table-responsive pt-4">
													<table className="table table-bordered mb-0 text-nowrap">
														<tr className="bg-primary">
															<th>S/N</th>
															<th>Link (URL)</th>
															<th>Unique</th>
															<th>Total</th>
														</tr>
														<tr>
															<td>1</td>
															<td>There is no link for this autoresponder.</td>
															<td></td>
															<td></td>
														</tr>
													</table>
												</div>
											</div>
											<div className="tab-pane fade p-0" id="open" role="tabpanel" aria-labelledby="open-tab">
												<div className="table-responsive pt-4">
													<table className="table table-bordered mb-0 text-nowrap">
														<tr className="bg-primary">
															<th>S/N</th>
															<th>Name</th>
															<th>Email</th>
															<th>List</th>
															<th>Status</th>
														</tr>
														<tr>
															<td>1</td>
															<td>No one opened yet.</td>
															<td></td>
															<td></td>
															<td></td>
														</tr>
													</table>
												</div>
											</div>
											<div className="tab-pane fade p-0" id="unsubscribed" role="tabpanel" aria-labelledby="unsubscribed-tab">
												<div className="table-responsive pt-4">
													<table className="table table-bordered mb-0 text-nowrap">
														<tr className="bg-primary">
															<th>S/N</th>
															<th>Name</th>
															<th>Email</th>
															<th>List</th>
															<th>Status</th>
															<th>Date</th>
														</tr>
														<tr>
															<td>1</td>
															<td>No one unsubscribed from this autoresponder</td>
															<td></td>
															<td></td>
															<td></td>
															<td></td>
														</tr>
													</table>
												</div>
											</div>
											<div className="tab-pane fade p-0" id="bounce" role="tabpanel" aria-labelledby="bounce-tab">
												<div className="table-responsive pt-4">
													<table className="table table-bordered mb-0 text-nowrap">
														<tr className="bg-primary">
															<th>S/N</th>
															<th>Name</th>
															<th>Email</th>
															<th>List</th>
															<th>Status</th>
															<th>Date</th>
														</tr>
														<tr>
															<td>1</td>
															<td>No Email bounced from this autoresponder</td>
															<td></td>
															<td></td>
															<td></td>
															<td></td>
														</tr>
													</table>
												</div>
											</div>
											<div className="tab-pane fade p-0" id="spams" role="tabpanel" aria-labelledby="spams-tab">
												<div className="table-responsive pt-4">
													<table className="table table-bordered mb-0 text-nowrap">
														<tr className="bg-primary">
															<th>S/N</th>
															<th>Name</th>
															<th>Email</th>
															<th>List</th>
															<th>Status</th>
															<th>Date</th>
														</tr>
														<tr>
															<td>1</td>
															<td>No one marked your email as a spam</td>
															<td></td>
															<td></td>
															<td></td>
															<td></td>
														</tr>
													</table>
												</div>
											</div>
											<div className="col-lg-12 margin-bottom text-right pt-4">
												<button className="btn btn-primary p-2">Back</button>
											</div>
										</div>
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
}