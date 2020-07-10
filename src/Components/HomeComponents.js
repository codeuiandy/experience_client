import React from 'react';
import {Link} from 'react-router-dom';
import black_logo  from '../img/logo-black.png';
import white_logo from '../img/logo.png';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';
import {StepFour} from './StepFour';

export const Login = () => {
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
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email Address</label>
                            <input type="text" className="form-control" placeholder="Enter your email address" />
                        </div>
                        
                        <div className="form-group">
                            <label for="exampleInputEmail1">Password</label>
                            <div className="forgotbox">
                            <input type="text" className="form-control" placeholder="Enter your password" />
                            <Link href="" className="forgot">Forgot?</Link>
                            </div>
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                        <p style={{paddingTop: '5px'}}>Not registered? <Link to="/signup">Sign Up</Link></p>
                        
                        <p><span className="or">Or</span></p>
                        
                        <br></br>
                    
                        <button type="submit" className="btn btn-primary btn-block"><i className="fa fa-google"></i> Continue with Google</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export const Signup = ()=>{
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
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Fullname</label>
                            <input type="text" className="form-control" placeholder="Enter your full name" />
                        </div>
                        
                        <div className="form-group">
                            <label for="exampleInputEmail1">Fullname</label>
                            <input type="text" className="form-control" placeholder="Enter your company's name" />
                        </div>
                        
                        <div className="form-group">
                            <label for="exampleInputEmail1">Work Email</label>
                            <input type="text" className="form-control" placeholder="Enter your work name" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Phone Number</label>
                            <input type="text" className="form-control" placeholder="Enter your phone number" />
                        </div>
                        
                        <div className="form-group">
                            <label for="exampleInputEmail1">Country</label>
                            <select className="form-control">
                                <option selected disabled>Select your country</option>
                                <option>Nigeria</option>
                                <option>Ghana</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label for="exampleInputEmail1">Language</label>
                            <select className="form-control">
                                <option selected disabled>Select your preferred language</option>
                                <option>English</option>
                                <option>French</option>
                            </select>
                        </div>
                    
                    
                        <div className="form-group">
                            <label for="exampleInputEmail1">Password</label>
                            <input type="password" className="form-control" placeholder="Enter your password name" />
                        </div>
                        
                        
                        <div className="form-group">
                            <label for="exampleInputEmail1">Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Re-type your password" />
                        </div>
                    
                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export const StepOneRegistration = () => (
    <StepOne />
)

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
