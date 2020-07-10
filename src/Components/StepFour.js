import React from 'react';
import {Link} from 'react-router-dom';
import black_logo  from '../img/logo-black.png';
import white_logo from '../img/logo.png';
import {MainFooter} from './elements/Footer';

export const StepFour = () => {
    return(
        <div id="app" className="step step4">
			<div className="main-wrapper">
				<nav className="navbar navbar-expand-lg main-navbar">
					<Link className="header-brand" href="index.html">
						<img src={white_logo} className="header-brand-img" alt="Kharna-Admin  logo" />
					</Link>
					<ul className="navbar-nav navbar-right" style={{display: 'flex', width: '80%', justifyContent: 'flex-end'}}>
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
										<hr className="fill"></hr>
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
									<h4 style={{padding:'30px 0px'}}>Step 4</h4>
									<h4 style={{padding:'10px 0px'}}>Payment</h4>
								</div>
								
								
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body">
											
											<div className="row">
												
												<div className="col-lg-12">
												<p>You're almost there! Let's get  payment out of the way, and you can begin building.</p>
												</div>
												<div className="col-lg-12">
													<h5>Selected Features</h5>
												</div>
											</div>
											<div className="row align-item-center">
												<div className="col-lg-1">
													<span className="circle">1</span> 
												</div>
												<div className="col-lg-3">
													Attendee Types
												</div>
												<div className="col-lg-2">
													<input value="$100" type="text" className="normal"/>
												</div>
												<div className="col-lg-2">
													<Link href="" className="text-danger">remove</Link>
												</div>
											</div>
											
											<div className="row align-item-center">
												<div className="col-lg-1">
													<span className="circle">2</span> 
												</div>
												<div className="col-lg-3">
													Guest Registrations
												</div>
												<div className="col-lg-2">
													<input value="$100" type="text" className="normal"/>
												</div>
												<div className="col-lg-2">
													<Link href="" className="text-danger">remove</Link>
												</div>
											</div>
											
											<div className="row align-item-center">
												<div className="col-lg-1">
													<span className="circle">3</span> 
												</div>
												<div className="col-lg-3">
													Registration Categories
												</div>
												<div className="col-lg-2">
													<input  value="$100" type="text" className="normal"/>
												</div>
												<div className="col-lg-2">
													<Link href="" className="text-danger">remove</Link>
												</div>
											</div>
											
											<div className="row align-item-center">
												<div className="col-lg-1">
													<span className="circle">3</span> 
												</div>
												<div className="col-lg-3">
													Registration Categories
												</div>
												<div className="col-lg-2">
													<input  value="$100" type="text" className="normal"/>
												</div>
												<div className="col-lg-2">
													<Link href="" className="text-danger">remove</Link>
												</div>
											</div>
											
											<div className="row align-item-center">
												<div className="col-lg-1">
													<span className="circle">3</span> 
												</div>
												<div className="col-lg-3">
													Registration Categories
												</div>
												<div className="col-lg-2">
													<input  value="$100" type="text" className="normal"/>
												</div>
												<div className="col-lg-2">
													<Link href="" className="text-danger">remove</Link>
												</div>
											</div>
											
											<div className="row align-item-center">
												<div className="col-lg-1">
													<span className="circle">3</span> 
												</div>
												<div className="col-lg-3">
													Registration Categories
												</div>
												<div className="col-lg-2">
													<input  value="$100" type="text" className="normal"/>
												</div>
												<div className="col-lg-2">
													<Link href="" className="text-danger">remove</Link>
												</div>
											</div>
											
											<div className="row align-item-center">
												<div className="col-lg-1">
													<span className="circle">3</span> 
												</div>
												<div className="col-lg-3">
													Registration Categories
												</div>
												<div className="col-lg-2">
													<input  value="$100" type="text" className="normal"/>
												</div>
												<div className="col-lg-2">
													<Link href="" className="text-danger">remove</Link>
												</div>
											</div>
											
											<hr></hr>
											<br></br>
											<br></br>
											<p>Note: Onsite Services options will be evaluated and billed separately. </p>
											
											<div className="row">
												<div className="col-lg-12"><h5 className="bold">Total</h5></div>
												<div className="col-lg-2">$800.00</div>
												<div className="col-lg-5">
													<button className="btn btn-primary mr-3">Pay</button>
													<span>OR</span>
													<Link className="btn btn-outline-primary ml-3">Generate Invoice</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
								
								
								<div className="col-lg-12 margin-bottom text-right">
									<Link to="/login" className="btn btn-outline-primary mr-3">Cancel</Link>
									<Link to="/step_three" className="btn btn-outline-primary mr-3">Previous</Link>
									<Link to="/payment" className="btn btn-primary">Save & Continue</Link>
								
								</div>
							
							</div>
						</div>
						
				</div>
				<MainFooter />
				
			</div>
		</div>
    );
}