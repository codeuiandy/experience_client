import React from 'react';
import logo from './logo.svg';
//import './App.css';
//import './index.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {Login,Signup,StepOneRegistration,StepTwoRegistration,
      StepThreeRegistration,StepFourRegistration} from '../src/Components/HomeComponents';
import {UserDashboard} from './Components/users/UserComponents';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
      <Router>
          <ToastContainer />
          <Switch>
                <Route exact="/" path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/step_one" component={StepOneRegistration} />
                <Route path="/step_two" component={StepTwoRegistration} />
                <Route path="/step_three" component={StepThreeRegistration} />
                <Route path="/step_four" component={StepFourRegistration} />
                <Route path="/user_dashboard" component={UserDashboard} />
          </Switch>
      </Router>
  );
}

export default App;
