import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {Sidebar} from '../elements/Sidebar';
import {MainFooter} from '../elements/Footer';
import {Navbar} from '../elements/Navbar';
import flower_img from '../../img/flower.png';
import add_event_img from '../../img/add.png';
import {handleGetRequestsWithToken} from '../elements/TaskHandlers';
import {get_user_events_url} from '../elements/Routes';


export const Dashboard = () => {
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
							<div className="col-lg-8 col-sm-12 col-md-8">
                                
									
									<div className="row">
										<div className="col-lg-2">
											<img src={flower_img} />
										</div>
										<div className="col-lg-9">
                                            <h4 className="bold">Hi, {full_name}</h4>
											<p>Welcome to your dashboard</p>
										</div>
									</div>
									
									<br/>
								<div className="row">
									
									<div className="input-group col-md-12">
										<input className="form-control py-2 border-right-0 border" type="search" value="search" id="example-search-input" />
										<span className="input-group-append">
										  <button className="btn search btn-outline-secondary border-left-0 border" type="button">
												<i className="fa fa-search"></i>
										  </button>
										</span>
									</div>
									<br/>
									<br/>
								</div>
								
								<div className="row">
									<div className="col-lg-12">
										<h3 style={{paddingTop:'20px'}}>Events</h3>
										<button className="btn btn-primary mr-3">Completed</button>
										<button className="btn btn-default">Upcoming</button>
									</div>
								</div>
								
								<div className="row margin-top">

                                    <div className="col-lg-4">
										<div className="card text-left">
											<img className="card-img-top" src="assets/img/news/img01.jpg" alt="gallery-img" data-text="Gallery-Image01" />
											<div className="content">
											<Link to="/user_event_details" className="bold">Harvard Luncheon</Link>
											<p><span className="bold">Location</span> <span>Ground Zero Central Park</span></p>
											<p><span className="bold">Date</span> <span>January 15, 2020</span></p>
											<p><span className="bold">Capacity</span> <span>1000</span></p>
											</div>
										</div>
									</div>

                                    <div className="col-lg-4">
										<div className="card text-left">
											<img className="card-img-top" src="assets/img/news/img01.jpg" alt="gallery-img" data-text="Gallery-Image01" />
											<div className="content">
											<Link to="/user_event_details" className="bold">Harvard Luncheon</Link>
											<p><span className="bold">Location</span> <span>Ground Zero Central Park</span></p>
											<p><span className="bold">Date</span> <span>January 15, 2020</span></p>
											<p><span className="bold">Capacity</span> <span>1000</span></p>
											</div>
										</div>
									</div>

                                    <div className="col-lg-4">
										<div className="card text-left">
											<img className="card-img-top" src="assets/img/news/img01.jpg" alt="gallery-img" data-text="Gallery-Image01" />
											<div className="content">
											<Link to="/user_event_details" className="bold">Harvard Luncheon</Link>
											<p><span className="bold">Location</span> <span>Ground Zero Central Park</span></p>
											<p><span className="bold">Date</span> <span>January 15, 2020</span></p>
											<p><span className="bold">Capacity</span> <span>1000</span></p>
											</div>
										</div>
									</div>
									
								
									
									<div className="col-lg-4">
										<Link to="/step_one" className="card adder">
										    <img src={add_event_img} className="add" />
										    <p className="text-center">Create A New Event</p>
										</Link>
									</div>
								
								</div>
							</div>
							
							<div className="col-lg-1 col-sm-1 col-md-1"></div>
							
	
							<div className="col-lg-3 col-sm-12 col-md-3">
								<h4>Upcoming Events</h4>
								<div id='calendar'></div>
								
								
								<br/>
								<br/>
								
								<h4>Published Websites</h4>
								<ul className="published">
									<li><Link className="list" to="/user_event_details">Havard Launcheon</Link></li>
									<li><Link className="list" to="/user_event_details">Brooklyn Event</Link></li>
									<li><Link className="list" to="/user_event_details">Alumni Reunion</Link></li>
									<li><Link className="list" to="/user_event_details">3D Optometry Session</Link></li>
								</ul>
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