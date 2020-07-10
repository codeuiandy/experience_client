import React from 'react';
import {Link} from 'react-router-dom';
import black_logo  from '../img/logo-black.png';
import white_logo from '../img/logo.png';
import {MainFooter} from './elements/Footer';

export const StepThree = () => {
    return(
        <div id="app" className="step step2">
			<div className="main-wrapper">
				<nav className="navbar navbar-expand-lg main-navbar">
					<Link className="header-brand" href="index.html">
						<img src={white_logo} className="header-brand-img" alt="Kharna-Admin  logo" />
					</Link>
					<ul className="navbar-nav navbar-right" style={{display: 'flex', width: '80%', justifyContent:'flex-end'}}>
						<li className="dropdown dropdown-list-toggle"><Link href="#">Ayobami</Link>
						</li> | 
						<li className="dropdown dropdown-list-toggle"><Link href="#">Logout</Link>
						</li>
					</ul>
				</nav>
				
				<div className="app-content">
						<div className="row banner">
							<h4>You're just a few steps away from creating that amazing event experience that you want, and we're really excited to help you achieve this.</h4>
						</div>
						
						<div className="row">
							<div className="container">
								<h5 className="bold padding text-center">
                                    We'll ask you a few question to help you with creating your events.</h5>
								
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
									<h4 style={{padding:'30px 0px'}}>Step 3</h4>
								</div>
								
								
								<div className="col-lg-12">
									<div className="card">
										<div className="card-body">
											<div className="row">
												<div className="col-lg-6" style={{display: 'flex', alignItems: 'flex-end'}}>
													<h5>Do you want to use Content Email Marketing Module?</h5>
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
								
								
								<div className="col-lg-12 margin-bottom text-right">
									<Link to="/login" className="btn btn-outline-primary mr-3">Cancel</Link>
									<Link to="/step_two" className="btn btn-outline-primary mr-3">Previous</Link>
									<Link to="/step_four" className="btn btn-primary">Save & Continue</Link>
								
								</div>
							
							</div>
						</div>
						
				</div>
				
                <MainFooter />
				
				
				
			</div>
		</div>
    );
}