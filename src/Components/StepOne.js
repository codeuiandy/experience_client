import React from 'react';
import {Link} from 'react-router-dom';
import black_logo  from '../img/logo-black.png';
import white_logo from '../img/logo.png';
import {MainFooter} from './elements/Footer';
export const StepOne = () => {
    return(
        <div id="app" className="step1">
			<div className="main-wrapper">
				<nav className="navbar navbar-expand-lg main-navbar">
					<Link className="header-brand" to="/">
						<img src={white_logo} className="header-brand-img" alt="Kharna-Admin  logo" />
					</Link>
                    <ul className="navbar-nav navbar-right" 
                        style={{display: 'flex', width: '80%',justifyContent: 'flex-end'}}>
						<li className="dropdown dropdown-list-toggle"><Link to="#">Ayobami</Link>
						</li> | 
						<li className="dropdown dropdown-list-toggle"><Link to="#">Logout</Link>
						</li>
					</ul>
				</nav>
				
				<div className="app-content">
						<div className="row banner">
							<h4>You're just a few steps away from creating that amazing event experience that you want, and we're really excited to help you achieve this.</h4>
						</div>
						
						<div className="row">
							<div className="container">
								<h5 className="bold padding text-center">We'll ask you a few question to help you with creating your events.</h5>
								
								<br></br>
								
								
								<div className="row">
									<div className="col-lg-3 text-center">
										<i className="fa fa-check round"></i>
										<hr className="fill"></hr>
									</div>
									<div className="col-lg-3 text-center">
										<i className="fa fa-check round"></i>
										<hr className="empty"></hr>
									</div>
									<div className="col-lg-3 text-center">
										<i className="fa fa-check round"></i>
										<hr className="empty"></hr>
									</div>
									<div className="col-lg-3 text-center">
										<i className="fa fa-check round"></i>
										<hr className="empty"></hr>
									</div>
								</div>
							</div>
						</div>
						
						
						<div className="row">
							<div className="container">
								<div className="col-lg-12">
									<h4 style={{padding:'30px 0px'}}>Event Details</h4>
								</div>
								
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body">
											<h5><span className="circle">1</span> Who can attend this event?</h5>
											<span className="options"><input type="radio" className="myradio"/> Anyone</span>
											<span className="options"><input type="radio" className="myradio"/> Invitees on private list <i className="fa fa-info-circle"></i></span>
											<span className="options"><input type="radio" className="myradio"/> Invitees via invite email <i className="fa fa-info-circle"></i></span>
										</div>
									</div>
								</div>
								
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body">
											<h5><span className="circle">2</span> What is the price of the event?</h5>
											<span className="options"><input type="radio" className="myradio"/> Free</span>
											<span className="options"><input type="radio" className="myradio"/> Paid</span>
											
											<div className="space"></div>
											
											<div className="row">
												<div className="col-lg-3" style={{display: 'flex', alignItems: 'flex-end'}}>
													<p>Hom many price categories?</p>
												</div>
												<div className="col-lg-3">
													<select className="form-control">
														<option>2</option>
														<option>4</option>
													</select>
												</div>
											</div>
											
											
											<div className="space"></div>
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <p className="bold">Category Name</p>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <p className="bold">Currency</p>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <p className="bold">Price</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <input type="text" className="form-control" placeholder="Regular"/>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <select className="form-control">
                                                            <option>Canadian Dollar</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <select className="form-control">
                                                            <option>200</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <input type="text" className="form-control" placeholder="Standard"/>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <select className="form-control">
                                                            <option>Canadian Dollar</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <select className="form-control">
                                                            <option>100</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <input type="text" className="form-control" placeholder="VIP"/>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <select className="form-control">
                                                            <option>Canadian Dollar</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <select className="form-control">
                                                            <option>500</option>
                                                        </select>
                                                    </div>
                                                </div>
										</div>
									</div>
								</div>
								
								
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body">
											<div className="row">
												<div className="col-lg-9" style={{display: 'flex', alignItems: 'flex-end'}} >
													<h5><span className="circle">3</span> What is the maximum attendee capacity for this event?</h5>
												</div>
												<div className="col-lg-3">
													<select className="form-control">
														<option>1000</option>
														<option>4000</option>
													</select>
												</div>
											</div>
										</div>
									</div>
								</div>
											
										
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body">
											<div className="row">
												<div className="col-lg-12" style={{display: 'flex', alignItems: 'flex-end'}}>
													<h5><span className="circle">4</span> What is the name of this event?</h5>
												</div>
												<div className="col-lg-12">
													<input type="text" className="form-control" />
												</div>
											</div>
										</div>
									</div>
								</div>
								
								
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body">
											<div className="row">
												<div className="col-lg-12 reposition">
													<h5><span className="circle">5</span> Tell us a bit more about your event - the goals and/or the objectives?</h5>
												</div>
												<div className="col-lg-12">
													<textarea className="form-control"></textarea>
												</div>
											</div>
										</div>
									</div>
								</div>
								
											
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body">
											<div className="row">
												<div className="col-lg-12" style={{display: 'flex', alignItems: 'flex-end'}}>
													<h5><span className="circle">6</span> What is the venue of the event?</h5>
												</div>
												<div className="col-lg-12">
													<div className="row margin-bottom">
														<div className="col-lg-9 col-sm-3">
														<span className="label"><i className="fa fa-map-marker fa-2x"></i> &nbsp; &nbsp; &nbsp; Location: </span>
														
														<input type="text" className="myinput"/>
														</div>
													</div>
													
													<div className="row margin-bottom">
														<div className="col-lg-9 col-sm-3">
														<span className="label"><i className="fa fa-map-marker fa-2x"></i> &nbsp; &nbsp; &nbsp; Time Zone: </span>
														
														<select className="myinput">
															<option></option>
														</select>
														</div>
													</div>
													
													<div className="row">
														<div className="col-lg-9 col-sm-3"><i className="fa fa-home fa-2x"></i> &nbsp; &nbsp; Address: 
														
															<div className="row expand">
																<div className="col-lg-6 col-sm-3"> 
																<span> Line 1:</span> <input type="text" className="myinput"/>
																</div>
																
																<div className="col-lg-6 col-sm-3"> 
																<span>City:</span>  <input type="text" className="myinput"/>
																</div>
															
																<div className="col-lg-6 col-sm-3">
																<span> Line 2:</span> <input type="text" className="myinput"/>
																</div>
															
																<div className="col-lg-6 col-sm-3"> 
																<span> State / Province:</span>  <input type="text" className="myinput"/>
																</div>
																
																<div className="col-lg-6 col-sm-3">
																<span> Zipcode:</span> <input type="text" className="myinput"/>
																</div>
																
																<div className="col-lg-6 col-sm-3"> 
																<span> Country:</span>  <input type="text" className="myinput"/>
																</div>
																
															</div>
														</div>
													</div>
													
												</div>
											</div>
										</div>
									</div>
								</div>
								
								
								
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body">
											<div className="row">
												<div className="col-lg-12" style={{display: 'flex', alignItems: 'flex-end'}}>
													<h5><span className="circle">7</span> When is this event taking place?</h5>
												</div>
													<div className="col-lg-12">
														<div className="row expand">
															<div className="col-lg-6 col-sm-3"> 
																<span>Start Date:</span>  <input type="text" className="myinput"/>
															</div>
														
															<div className="col-lg-6 col-sm-3">
																<span>End Date:</span> <input type="text" className="myinput"/>
															</div>
														</div>
													</div>
													
														
													<div className="col-lg-12 expand">
														 
														
															<div className="row expand">
																<div className="col-lg-12 col-sm-3"> Day 1: </div>
																<div className="col-lg-6 col-sm-3"> 
																<span> Start Time:</span> <input type="text" className="myinput"/>
																</div>
																
																<div className="col-lg-6 col-sm-3"> 
																<span>End Time: </span>  <input type="text" className="myinput"/>
																</div>
																																
															</div>
													</div>
													
												
											</div>
										</div>
									</div>
								</div>
								
							
								<div className="col-lg-12 margin-bottom text-right">
									<Link to="/signup" className="btn btn-outline-primary mr-5">Cancel</Link>
									<Link to="/step_two" className="btn btn-primary">Save & Continue</Link>
								</div>
							
							</div>
						</div>
						<MainFooter />
				</div>
			</div>
		</div>
    );
}