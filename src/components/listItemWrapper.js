import React, { Component } from "react";
import Rates from "./rates";

class ItemWrapper extends Component {
	render() {
		return (
			<div className="itemWrapper">
				<Rates
					currencyA={this.props.currencyA}
					currencyB={this.props.currencyB}
				/>
			</div>
		);
	}
}

export default ItemWrapper;
