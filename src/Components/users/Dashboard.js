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
                                        <video width="100%"  controls>
                                            <source src="movie.mp4" type="video/mp4" />
                                            <source src="movie.ogg" type="video/ogg" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <br/>
                                    <div className="col-lg-12 info">You have no events yet!</div>
                                    <br/>
                                    <br/>
                                    
                                    
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
                                <h4 className="bold">Upcoming Events</h4>
                                <div className="">
                                    <p>No Upcoming events yet</p>
                                </div>
                                
                                <br/>
                                <br/>
                                
                                <h4 className="bold">Published Websites</h4>
                                <div className="">
                                    <a className="list" href="#">No website yet</a>
                                
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