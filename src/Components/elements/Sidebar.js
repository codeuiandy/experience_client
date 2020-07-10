import React from 'react';
import {Link} from 'react-router-dom';


export const Sidebar = () => (
    <aside className="app-sidebar">
        <ul className="side-menu">
        
            <li>
                <Link className="side-menu__item" to="widgets.html">
                    <i className="side-menu__icon fa fa-desktop"></i><span className="side-menu__label">Dashboard</span>
                </Link>
            </li>
            <li>
                <Link className="side-menu__item" to="widgets.html"><i className="side-menu__icon fa fa-flask"></i>
                    <span className="side-menu__label">Session Management</span>
                </Link>
            </li>
            <li className="slide">
                <Link className="side-menu__item" data-toggle="slide" to="#"><i className="side-menu__icon fa fa-tasks">
                    </i><span className="side-menu__label">Content Marketing</span><i className="angle fa fa-angle-right"></i>
                </Link>
                <ul className="slide-menu">
                    <li><Link to="#" className="slide-item"> Email Contact Lists</Link></li>
                    <li><Link to="#" className="slide-item"> Compose Email</Link></li>
                    <li><Link to="#" className="slide-item"> Sent Emails</Link></li>
                    <li><Link to="#" className="slide-item"> Autoresponder Emails</Link></li>
                </ul>
            </li>
            <li className="slide">
                <Link className="side-menu__item" data-toggle="slide" to="#">
                    <i className="side-menu__icon fa fa-paw"></i><span className="side-menu__label">Attedee Engagement</span>
                    <i className="angle fa fa-angle-right"></i>
                </Link>
                <ul className="slide-menu">
                    <li><Link to="icons-ion.html" className="slide-item"> Ion Icons</Link></li>
                    <li><Link to="icons-fontawesome.html" className="slide-item"> Font Awesome</Link></li>
                </ul>
            </li>
            <li className="slide">
                <Link className="side-menu__item" data-toggle="slide" to="#"><i className="side-menu__icon fa fa-table"></i><span className="side-menu__label">Website Integration</span><i className="angle fa fa-angle-right"></i></Link>
                <ul className="slide-menu">
                    <li><Link to="table.html" className="slide-item">Basic Tables</Link></li>
                    <li><Link to="datatables.html" className="slide-item"> Data Tables</Link></li>
                </ul>
            </li>
        </ul>
    </aside>
)