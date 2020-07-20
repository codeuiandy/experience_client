import React, { Component } from "react";
import "./componets.css";
import { MainFooter } from "../Components/elements/Footer";
import Layout from "./elements/Layout/Layout";

export default class addToContactList extends Component {
	render() {
		return (
			<div>
				<div id="app">
					<div className="main-wrapper">
						<Layout>
							{" "}
							<div className="app-content">
								<section className="section event_details">
									<div className="row">
										<div className="wrapper">
											<h1>Add To Cart List</h1>

											<label class="addToCart-container addToCart-Label">
												Add an attendee
												<input type="checkbox" />
												<span class="checkmark"></span>
											</label>
											<label class="addToCart-container addToCart-Label">
												Copy and paste from file
												<input type="checkbox" />
												<span class="checkmark"></span>
											</label>
											<label class="addToCart-container addToCart-Label">
												Import file (.csv or .xls)
												<input type="checkbox" />
												<span class="checkmark"></span>
											</label>

											<div className="btn-addtocart">
												<button>Cancel</button>
												<button>Continue</button>
											</div>
										</div>
									</div>
								</section>
							</div>
						</Layout>
					</div>
				</div>
			</div>
		);
	}
}
