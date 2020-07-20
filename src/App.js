import React from "react";
import logo from "./logo.svg";
//import './App.css';
//import './index.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
	Login,
	Signup,
	StepOneRegistration,
	StepTwoRegistration,
	StepThreeRegistration,
	StepFourRegistration,
} from "../src/Components/HomeComponents";
import {
	UserDashboard,
	UserEventDetails,
	UserAutoresponder,
	UserAutoresponderReport,
	UserAutoresponderSettings,
	UserAutoresponderEmail,
	UserCreateAutoresponder,
} from "./Components/users/UserComponents";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddToContactList from "./Components/addToContactList";
import AppLayout from "./Components/elements/Layout/Layout";
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
				<Route path="/user_dashboard" component={UserDashboard} />{" "}
				<Route path="/user_event_details" component={UserEventDetails} />
				<Route path="/user_autoresponder" component={UserAutoresponder} />
				<Route
					path="/user_autoresponder_report"
					component={UserAutoresponderReport}
				/>
				<Route
					path="/user_autoresponder_settings"
					component={UserAutoresponderSettings}
				/>
				<Route
					path="/user_autoresponder_email"
					component={UserAutoresponderEmail}
				/>
				<Route
					path="/user_create_autoresponder"
					component={UserCreateAutoresponder}
				/>
				<Route path="/add-to-cart-list" component={AddToContactList} />
			</Switch>
		</Router>
	);
}

export default App;
