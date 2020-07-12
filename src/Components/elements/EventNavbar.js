import React, { useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import white_logo from '../../img/logo.png';
export const EventNavbar = () => {
	let [{ full_name },setUserInformation] = useState({
		full_name : ''
	});
	useEffect(()=>{
		let {user} = JSON.parse(localStorage.getItem('user_information'));
		console.log(user);
		setUserInformation({full_name : user.name})
	},[

	]);
	return(
		<nav className="navbar navbar-expand-lg main-navbar">
			<Link className="header-brand" to="/user_dashboard">
				<img src={white_logo} className="header-brand-img" alt="Kharna-Admin  logo" />
			</Link>
			<ul className="navbar-nav navbar-right" 
				style={{display: 'flex', width: '80%',justifyContent: 'flex-end'}}>
				<li className="dropdown dropdown-list-toggle text-white">
					{full_name}
				</li> 
				<li className="dropdown dropdown-list-toggle"><Link to="#" className="text-white">Logout</Link>
				</li>
			</ul>
		</nav>
	)
}