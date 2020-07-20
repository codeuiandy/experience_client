import React from "react";
import { Link } from "react-router-dom";
import white_logo from "../../../img/logo.png";
import prof_img_placeholder from "../../../img/profile_placeholder.png";

export const Navbar = () => (
	<nav className="navbar navbar-expand-lg main-navbar">
		<Link className="header-brand" to="#">
			<img
				src={white_logo}
				className="header-brand-img"
				alt="Kharna-Admin  logo"
			/>
		</Link>
		<form className="form-inline mr-auto"></form>
		<ul className="navbar-nav navbar-right">
			<li className="dropdown">
				<Link
					to="#"
					data-toggle="dropdown"
					className="nav-link dropdown-toggle nav-link-lg"
				>
					<img
						src={prof_img_placeholder}
						alt="profile-user"
						className="rounded-circle w-32"
					/>
				</Link>
				<div className="dropdown-menu dropdown-menu-right">
					<Link to="profile.html" className="dropdown-item has-icon">
						<i className="ion ion-android-person"></i> Profile
					</Link>
					<Link to="profile.html" className="dropdown-item has-icon">
						<i className="ion-android-drafts"></i> Messages
					</Link>
					<Link to="profile.html" className="dropdown-item has-icon">
						<i className="ion ion-gear-a"></i> Settings
					</Link>
					<Link to="#" className="dropdown-item has-icon">
						<i className="ion-ios-redo"></i> Logout
					</Link>
				</div>
			</li>
		</ul>
	</nav>
);
