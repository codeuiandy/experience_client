import React from 'react';
import {Link} from 'react-router-dom';
import {Dashboard} from './Dashboard';
import {EventDetails} from './EventDetails';
import {Autoresponder} from './Autoresponder';
import {AutoresponderReport} from './AutoresponderReport';
import { AutoresponderSettings } from './AutoresponderSettings';
import {AutoresponderEmail} from './AutoresponderEmail';
import {CreateAutoresponder} from './CreateAutoresponder';

export const UserDashboard = () => (
    <Dashboard />
)

export const UserEventDetails = () => (
    <EventDetails />
);


export const UserAutoresponder = () => (
    <Autoresponder />
)

export const UserAutoresponderReport = () => (
    <AutoresponderReport />
)

export const UserAutoresponderSettings = () => (
    <AutoresponderSettings />
);

export const UserAutoresponderEmail = () => (
    <AutoresponderEmail />
);

export const UserCreateAutoresponder = () => (
    <CreateAutoresponder />
)