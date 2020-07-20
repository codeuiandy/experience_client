import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { MainFooter } from "./MainFooter";

import React from "react";

export default function Layout(props) {
	return (
		<div>
			<Navbar />

			{props.children}
			<Sidebar />
			<MainFooter />
		</div>
	);
}
