import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import black_logo  from '../img/logo-black.png';
import white_logo from '../img/logo.png';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';
import {StepFour} from './StepFour';
import {handlePostRequest} from './elements/TaskHandlers';
import {user_registration_url,user_login_url} from './elements/Routes';
import {toast } from 'react-toastify';

export const Login =  (props) => {
    const [login_details,setUserLogin] = useState({
        email : '',
        password : ''
    });
    let [is_processing,setProcessingStatus] = useState(false);
    return(
        <div className="row login">
            <div className="col-lg-12 col-sm-12 col-md-12">
                <div className="container">
                    <h1 className="text-center"><img className="logo" src={black_logo} /></h1>
                    <p className="text-center small">Create, personalize and manage your events like never before.</p>
                </div>
            </div>
            
            <div className="col-lg-12 col-sm-12 col-md-12">
                <div className="container box">
                    <h4 className="bold">Sign In</h4>
                    <br></br>
                    <form method="POST" onSubmit={(event)=>{
                        event.preventDefault();
                        setProcessingStatus(true);
                        console.log(login_details);
                        handlePostRequest(user_login_url,login_details).then(res => {
                            setProcessingStatus(false);
                            if(res.code === 400 && Array.isArray(res.message)){
                                console.log(res);
                                for(let error of res.message){
                                    toast.error(error);
                                }
                                return false;
                            }
                            if(res.code === 200){
                                return props.history.push('/user_dashboard');
                            }
                            return toast.error(res.message);
                        }).catch(error => {
                            setProcessingStatus(false);
                            console.log(error);
                        });
                    }}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email Address</label>
                            <input name="email" type="text" className="form-control" placeholder="Enter your email address" 
                                value={login_details.email}
                                onChange={(event) => setUserLogin({... login_details, email : event.target.value})}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label for="exampleInputEmail1">Password</label>
                            <div className="forgotbox">
                            <input name="password" type="password" className="form-control" placeholder="Enter your password" 
                                value={login_details.password}
                                onChange={(event)=> setUserLogin({ ... login_details , password : event.target.value})}
                            />
                            <Link to="#" className="forgot">Forgot?</Link>
                            </div>
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-primary btn-block"
                            disabled={is_processing}
                        >
                            {is_processing ? <i class="fa fa-spinner fa-spin p-2"></i> : 'Login'}
                        </button>
                        <p style={{paddingTop: '5px'}}>Not registered? <Link to="/signup">Sign Up</Link></p>
                        
                        <p><span className="or">Or</span></p>
                        
                        <br></br>
                    
                        <button type="button" className="btn btn-primary btn-block"><i className="fa fa-google"></i> Continue with Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export const Signup = (props)=>{
    const [user_information,setUserInformation] = useState({
        name : '',
        email : '',
        phone_number : '',
        country : '',
        language : '',
        password : '',
        password_confirmation  : ''
    });
    const [is_processing, setProcessingStatus] = useState(false)
    return(
        <div className="row signup">
            <div className="col-lg-4 col-sm-6 col-md-6 left-half">
                <div className="container">
                    <p className="text-center">Create, personalize and manage your events like never before.</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1>The</h1>
                    <h1><img src={white_logo} /></h1>
                    <h1 className="bold">Plug</h1>
                </div>
            </div>
		
            <div className="col-lg-8 col-sm-6 col-md-6 right-half">
                <div className="container">
                    <div className="text-right"><p>Already have an account? <Link to="">Login</Link></p></div>
                    <h4 className="bold">Sign Up</h4>
                    <br></br>
                    <form method="POST" onSubmit={(event)=>{
                        event.preventDefault();
                        setProcessingStatus(true);
                        handlePostRequest(user_registration_url,user_information).then(res => {
                            setProcessingStatus(false);
                            console.log(res);
                            if(res.code === 400 && Array.isArray(res.message)){
                                for(let error of res.message){
                                    toast.error(error);
                                }
                                return false;
                            }
                            if(res.code === 400 && !Array.isArray(res.message)){
                                return toast.error(res.message);
                            }
                            if(res.code === 201){
                                toast.success("Success! Account created");
                                return props.history.push('/login');
                            }
                            return toast.error('Opps! Something went wrong. Please retry'); 
                        }).catch(error => {
                            setProcessingStatus(false);
                            toast.error("Opps! Something went wrong");
                            console.log(error);
                        });
                    }}>        
                        <div className="form-group">
                            <label for="exampleInputEmail1">Fullname</label>
                            <input type="text" className="form-control" placeholder="Enter your company's name" 
                                value={user_information.name}
                                onChange={(event)=> setUserInformation({... user_information, name : event.target.value})}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label for="exampleInputEmail1">Work Email</label>
                            <input type="email" className="form-control" placeholder="Enter your work name" 
                                value={user_information.email}
                                onChange={(event)=> setUserInformation({... user_information, email : event.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Phone Number</label>
                            <input type="tel" className="form-control" placeholder="Enter your phone number" 
                                value={user_information.phone_number}
                                onChange={(event)=> setUserInformation({... user_information, phone_number : event.target.value})}
                            />
                        </div>
                        
                        <div className="form-group">
                            <label for="exampleInputEmail1">Country</label>
                            <select className="form-control"
                                value={user_information.country}
                                onChange={(event)=> setUserInformation({... user_information, country : event.target.value})}
                            >
                                <option value="">Select your country</option>
                                <option value="nigeria">Nigeria</option>
                                <option value="ghana">Ghana</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label for="exampleInputEmail1">Language</label>
                            <select className="form-control"
                                value={user_information.language}
                                onChange={(event)=> setUserInformation({... user_information, language : event.target.value})}
                            >
                                <option value="">Select your preferred language</option>
                                <option value="english">English</option>
                                <option value="french">French</option>
                            </select>
                        </div>
                    
                    
                        <div className="form-group">
                            <label for="exampleInputEmail1">Password</label>
                            <input type="password" className="form-control" placeholder="Enter your password name" 
                                value={user_information.password}
                                onChange={(event)=> setUserInformation({... user_information, password : event.target.value})}
                            />
                        </div>
                        
                        
                        <div className="form-group">
                            <label for="exampleInputEmail1">Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Re-type your password" 
                                onChange={(event)=> setUserInformation({... user_information, password_confirmation : event.target.value})}
                            />
                        </div>
                    
                        <button type="submit" className="btn btn-primary btn-block" disabled={is_processing}>
                            {
                                is_processing ? <i className="fa fa-spinner fa-spin p-2"></i> : 'Sign Up'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export const StepOneRegistration = (props) => {
    console.log(props);
    return(
        <StepOne props={props}/>
    )
}

export const StepTwoRegistration = () => (
    <StepTwo />
);

export const StepThreeRegistration = () => (
    <StepThree />
)

export const StepFourRegistration = () =>(
    <StepFour />
)

export const Payment = () =>(
    <StepFour />
)
