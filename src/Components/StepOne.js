import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {MainFooter} from './elements/Footer';
import {EventNavbar} from './elements/EventNavbar';
import {CreateEventProgressBar} from './elements/CreateEventProgressBar';
import { handlePostRequestWithToken } from './elements/TaskHandlers';
import {create_event_url} from './elements/Routes';
import { toast } from 'react-toastify';
export const StepOne = ({props}) => {
	const [event_details,setEventDetails] = useState({
		can_attend : '',
		event_type : '',
		categories : [],
		max_attendee : '',
		event_name : '',
		about_event : '',
		venue : '',
		time_zone : '',
		line_1 : '',
		city : '',
		line_2 : '',
		state : '',
		zip_code : '',
		country : '' ,
		start_date : '',
		end_date : '',
		start_time : '',
		end_time : '',
		current_step : 1,
		category_counter : '1'
	});
	let [is_processing,setProcessingStatus] = useState(false);
    return(
        <div id="app" className="step1">
			<div className="main-wrapper">
				<EventNavbar />
				<div className="app-content">
						<div className="row banner">
							<h4>You're just a few steps away from creating that amazing event experience that you want,
								 and we're really excited to help you achieve this.</h4>
						</div>
						<div className="row">
							<div className="container">
								<h5 className="bold padding text-center">
									We'll ask you a few question to help you with creating your events.
								</h5>
								
								<br></br>
								
								<CreateEventProgressBar />
								
							</div>
						</div>
						
						
						<form method="POST" onSubmit={(event)=>{
							event.preventDefault();
							setProcessingStatus(true);
							handlePostRequestWithToken(create_event_url,event_details).then(res => {
								setProcessingStatus(false);
								console.log(res);
								if(res.original !== undefined && res.original.message === "Unauthenticated."){
									toast.error('Unauthorized access');
									return props.history.push('/login');
								}
								if(res.code === 400 && Array.isArray(res.message)){
									for(let error of res.message){
										toast.error(error);
									}
									return false;
								}
								if(res.code === 200){
									localStorage.setItem('event',res.data.event);
									toast.success(res.message);
									return props.history.push('/step_two');
								}
								return toast.error(res.message);
							}).catch(error => {
								setProcessingStatus(false);
								console.log(error);
							});
						}}>
							<div className="row">
								<div className="container">
									<div className="col-lg-12">
										<h4 style={{padding:'30px 0px'}}>Event Details</h4>
									</div>
									
									<div className="col-lg-12">
										<div className="card">
											<div className="card-body">
												<h5><span className="circle">1</span> Who can attend this event?</h5>
												<span className="options"><input name="can_attend" type="radio" className="myradio"
													onChange={()=>setEventDetails({... event_details,can_attend : 'anyone'})}
												/> Anyone</span>
												<span className="options"><input name="can_attend" type="radio" className="myradio"
													onChange={()=>setEventDetails({... event_details,can_attend : 'private_list'})}
												/> Invitees on private list <i className="fa fa-info-circle"></i></span>
												<span className="options"><input name="can_attend" type="radio" className="myradio"
													onChange={()=>setEventDetails({... event_details,can_attend : 'invite_email'})}
												/> Invitees via invite email <i className="fa fa-info-circle"></i></span>
											</div>
										</div>
									</div>
									
									<div className="col-lg-12">
										<div className="card">
											<div className="card-body">
												<h5><span className="circle">2</span> What is the price of the event?</h5>
												<span className="options"><input name="event_type" type="radio" className="myradio"
													onChange={()=>setEventDetails({... event_details,event_type : 'free'})}
												/> Free</span>
												<span className="options"><input name="event_type" type="radio" className="myradio"
													onChange={()=>setEventDetails({... event_details,event_type : 'paid'})}
												/> Paid</span>
												
												<div className="space"></div>
												
												{
													event_details.event_type === 'paid' && (
														<div className="row">
															<div className="col-lg-3" style={{display: 'flex', alignItems: 'flex-end'}}>
																<p>How many price categories?</p>
															</div>
															<div className="col-lg-3">
																<select className="form-control"
																	onChange={(event)=>{
																		setEventDetails({... event_details,
																			 category_counter : event.target.value});
																	}}
																>
																	<option value="1">1</option>
																	<option value="12">2</option>
																	<option value="123">3</option>
																	<option value="1234">4</option>
																	<option value="12345">5</option>
																</select>
															</div>
														</div>
													)
												}
												
												
													<div className="space"></div>
													{
														event_details.event_type === 'paid' && (
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
														)
													}
													{
														event_details.event_type === 'paid' && [... event_details.category_counter].map((index)=>{
															return(
																<div className="row" key={index}>
																	<div className="col-lg-3">
																		<input name="category[]" type="text" className="form-control" placeholder="Regular"/>
																	</div>
																	<div className="col-lg-3">
																		<select className="form-control">
																			<option value="cad">Canadian Dollar</option>
																			<option value="usd">US Dollar</option>
																			<option value="naira">Naira</option>
																		</select>
																	</div>
																	<div className="col-lg-3">
																		<input className="form-control" />
																	</div>
																</div>
															)
														})
													}
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
														<input name="max_attendee"  className="form-control" type="number"
															value={event_details.max_attendee}
															onChange={(event)=>{
																setEventDetails({
																	... event_details,max_attendee : event.target.value
																})
															}}
														/>
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
														<input name="event_name" type="text" className="form-control" 
															value={event_details.event_name}
															onChange={(event)=>setEventDetails({
																... event_details,event_name : event.target.value
															})}
														/>
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
														<textarea className="form-control"
															onChange={(event)=>setEventDetails({
																... event_details,about_event : event.target.value
															})}
														>{event_details.about_event}</textarea>
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
															
															<input type="text" className="myinput"
																name="location"
																value={event_details.venue}
																onChange={(event)=>setEventDetails({
																	... event_details,venue : event.target.value
																})}
																required
															/>
															</div>
														</div>
														
														<div className="row margin-bottom">
															<div className="col-lg-9 col-sm-3">
															<span className="label"><i className="fa fa-map-marker fa-2x"></i> &nbsp; &nbsp; &nbsp; Time Zone: </span>
															
															<select name="time" className="myinput"
																value={event_details.time_zone}
																onChange={(event)=>setEventDetails({
																	... event_details,time_zone : event.target.value
																})}
																required
															>
																<option value="">Select Time Zone</option>
																{
																	time_zones.map((time_zone,index)=>{
																		return(
																		<option key={index} value={time_zone}>{time_zone}</option>
																		)
																	})
																}
															</select>
															</div>
														</div>
														
														<div className="row">
															<div className="col-lg-9 col-sm-3"><i className="fa fa-home fa-2x"></i> &nbsp; &nbsp; Address: 
															
																<div className="row expand">
																	<div className="col-lg-6 col-sm-3"> 
																		<span> Line 1:</span> <input type="text" className="myinput"
																			value={event_details.line_1}
																			onChange={(event)=>{
																				setEventDetails({
																					... event_details, line_1 : event.target.value
																				})
																			}}
																			required
																		/>
																	</div>
																	
																	<div className="col-lg-6 col-sm-3"> 
																	<span>City:</span>  <input type="text" className="myinput"
																		value={event_details.city}
																		onChange={(event)=>{
																			setEventDetails({
																				... event_details, city : event.target.value
																			})
																		}}
																		required
																	/>
																	</div>
																
																	<div className="col-lg-6 col-sm-3">
																	<span> Line 2:</span> <input type="text" className="myinput"
																		value={event_details.line_2}
																		onChange={(event)=>{
																			setEventDetails({
																				... event_details, line_2 : event.target.value
																			})
																		}}
																		required
																	/>
																	</div>
																
																	<div className="col-lg-6 col-sm-3"> 
																	<span> State / Province:</span>  <input type="text" className="myinput"
																		value={event_details.state}
																		onChange={(event)=>{
																			setEventDetails({
																				... event_details, state : event.target.value
																			})
																		}}
																		required
																	/>
																	</div>
																	
																	<div className="col-lg-6 col-sm-3">
																	<span> Zipcode:</span> <input type="text" className="myinput"
																		value={event_details.zip_code}
																		onChange={(event)=>{
																			setEventDetails({
																				... event_details, zip_code : event.target.value
																			})
																		}}
																		required
																	/>
																	</div>
																	
																	<div className="col-lg-6 col-sm-3"> 
																	<span> Country:</span>  <input type="text" className="myinput"
																		value={event_details.country}
																		onChange={(event)=>{
																			setEventDetails({
																				... event_details, country : event.target.value
																			})
																		}}
																		required
																	/>
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
																	<span>Start Date:</span>  <input type="date" className="myinput"
																		value={event_details.start_date}
																		onChange={(event)=>{
																			setEventDetails({
																				... event_details, start_date : event.target.value
																			})
																		}}
																		required
																	/>
																</div>
															
																<div className="col-lg-6 col-sm-3">
																	<span>End Date:</span> <input type="date" className="myinput"
																		value={event_details.end_date}
																		onChange={(event)=>{
																			setEventDetails({
																				... event_details, end_date : event.target.value
																			})
																		}}
																		required
																	/>
																</div>
															</div>
														</div>
														
															
														<div className="col-lg-12 expand">
															
															
																<div className="row expand">
																	<div className="col-lg-12 col-sm-3"> Day 1: </div>
																	<div className="col-lg-6 col-sm-3"> 
																	<span> Start Time:</span> <input type="time" className="myinput"
																		value={event_details.start_time}
																		onChange={(event)=>{
																			setEventDetails({
																				... event_details, start_time : event.target.value
																			})
																		}}
																		required
																	/>
																	</div>
																	
																	<div className="col-lg-6 col-sm-3"> 
																	<span>End Time: </span>  <input type="time" className="myinput"
																		value={event_details.end_time}
																		onChange={(event)=>{
																			setEventDetails({
																				... event_details, end_time : event.target.value
																			})
																		}}
																		required
																	/>
																	</div>
																																	
																</div>
														</div>
														
													
												</div>
											</div>
										</div>
									</div>
									
								
									<div className="col-lg-12 margin-bottom text-right">
										<Link to="/user_dashboard" className="btn btn-outline-primary mr-5">Cancel</Link>
										<button type="submit" className="btn btn-primary" 
											disabled={is_processing}
										>
											{is_processing ? <i className="fa fa-spinner fa-spin p-2"></i> : 'Save & Continue'}
										</button>
									</div>
								
								</div>
							</div>
						</form>
						<MainFooter />
				</div>
			</div>
		</div>
    );
}

const time_zones = [
	'Africa/Abidjan','Africa/Accra','Africa/Addis_Ababa','Africa/Algiers',
'Africa/Asmara','Africa/Bamako','Africa/Bangui','Africa/Banjul',
'Africa/Bissau',	'Africa/Blantyre','Africa/Brazzaville'	

,'Africa/Bujumbura'
// Africa/Cairo	Africa/Casablanca	Africa/Ceuta	Africa/Conakry
// Africa/Dakar	Africa/Dar_es_Salaam	Africa/Djibouti	Africa/Douala
// Africa/El_Aaiun	Africa/Freetown	Africa/Gaborone	Africa/Harare
// Africa/Johannesburg	Africa/Juba	Africa/Kampala	Africa/Khartoum
// Africa/Kigali	Africa/Kinshasa	Africa/Lagos	Africa/Libreville
// Africa/Lome	Africa/Luanda	Africa/Lubumbashi	Africa/Lusaka
// Africa/Malabo	Africa/Maputo	Africa/Maseru	Africa/Mbabane
// Africa/Mogadishu	Africa/Monrovia	Africa/Nairobi	Africa/Ndjamena
// Africa/Niamey	Africa/Nouakchott	Africa/Ouagadougou	Africa/Porto-Novo
// Africa/Sao_Tome	Africa/Tripoli	Africa/Tunis	Africa/Windhoek
];