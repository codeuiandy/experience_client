import React from 'react';

export const CreateEventProgressBar = () => (
    <div className="row">
        <div className="col-lg-3 text-center">
            <i className="fa fa-check round"></i>
            <hr className={window.location.pathname.includes('/step_one') ? 'fill' : 'empty'}></hr>
        </div>
        <div className="col-lg-3 text-center">
            <i className="fa fa-check round"></i>
            <hr className={window.location.pathname.includes('/step_two') ? 'fill' : 'empty'}></hr>
        </div>
        <div className="col-lg-3 text-center">
            <i className="fa fa-check round"></i>
            <hr className={window.location.pathname.includes('/step_three') ? 'fill' : 'empty'}></hr>
        </div>
        <div className="col-lg-3 text-center">
            <i className="fa fa-check round"></i>
            <hr className={window.location.pathname.includes('/step_four') ? 'fill' : 'empty'}></hr>
        </div>
    </div>
);