import React from 'react'
import {Link} from 'react-router-dom';
import black_logo  from '../img/logo-black.png';
import white_logo from '../img/logo.png';
import {MainFooter} from './elements/Footer';

export const StepTwo = () => {
    return(
        <div id="app" className="step step2">
			<div className="main-wrapper">
				<nav className="navbar navbar-expand-lg main-navbar">
					<Link className="header-brand" to="index.html">
						<img src={white_logo} className="header-brand-img" alt="Kharna-Admin  logo" />
					</Link>
					<ul className="navbar-nav navbar-right" style={{display: 'flex', width:'80%',justifyContent:'flex-end'}}>
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
								</div>
							</div>
						</div>
						
						
						<div className="row">
							<div className="container">
								<div className="col-lg-12">
									<h4 style={{padding:'30px 0px'}}>Step 2</h4>
									<h4 style={{padding:'10px 0px'}}>Event Features</h4>
									<h4 style={{padding:'10px 0px'}}>Select the features you want for this event:</h4>
								</div>
								
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body">
											<h5>Event Type</h5>
											<div className="row">
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Conference</div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Concert <i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> End of the year party <i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Live Show<i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Product Launch <i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Annual General Meeting <i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Exhibition <i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Fashion Show <i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/>Festival <i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/>Social Event <input type="text" className="form-control" placeholder="Please Specify..."/></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/>Others <input type="text" className="form-control" placeholder="Please Specify..."/> </div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body">
											<h5>Registration Details</h5>
											<div className="row">
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Attendee Tyes</div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Registration Categories <i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Registration Approval <i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Group Registration<i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Event Waitlist <i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Discount & Access Codes <i className="fa fa-info-circle"></i></div>
											
											</div>
										</div>
									</div>
								</div>
								
								
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body">
											<div className="row">
												<div className="col-lg-6" style={{display: 'flex', alignItems: 'flex-end'}}>
													<h5>Do you require an event website</h5>
												</div>
											</div>
											<div className="row">
												<div className="col-lg-2">
													<input type="radio" className="" /> Yes
												</div>
												<div className="col-lg-2">
													<input type="radio" className="" /> No
												</div>
											</div>
										</div>
									</div>
								</div>
											
										
								
								
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body">
											<h5>Audience</h5>
											<div className="row">
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Virtual</div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> In-person <i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Hybrid <i className="fa fa-info-circle"></i></div>
											
											</div>
										</div>
									</div>
								</div>
								
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body">
											<h5>Onsite Services</h5>
											<div className="row">
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Self Check-in</div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Customization Badge Print<i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Barcode Scanners <i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Onsite Checkin Personnel<i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> WristBanks <i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Self Check-in <i className="fa fa-info-circle"></i></div>
											
											</div>
										</div>
									</div>
								</div>
								
								
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body">
											<h5>Attendee Engagement</h5>
											<div className="row">
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Feedback</div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Social Media Integration<i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Polling <i className="fa fa-info-circle"></i></div>
											<div className="col-lg-4 listitem"><input type="checkbox" className="myradio"/> Survey<i className="fa fa-info-circle"></i></div>
											
											</div>
										</div>
									</div>
								</div>
								
								
								<div className="col-lg-12 margin-bottom text-right">
									<Link to="/login" className="btn btn-outline-primary mr-3">Cancel</Link>
									<Link to="/step_one" className="btn btn-outline-primary mr-3">Previous</Link>
									<Link to="/step_three" className="btn btn-primary">Save & Continue</Link>
								
								</div>
							
							</div>
						</div>
						
                </div>
                <MainFooter />
			</div>
		</div>
    )
}