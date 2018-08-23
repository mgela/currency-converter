import React, { Component } from "react";

class Search extends Component {
	render() {
		return (
			<div className="inputsWrapper">
				<input
					type="text"
					className="inputs"
					onChange={this.props.handleCurrency}
					name={"CurrencyA"}
					maxLength="3"
					minLength="3"
				/>
				<input
					type="text"
					className="inputs"
					onChange={this.props.handleCurrency}
					name={"CurrencyB"}
					maxLength="3"
					minLength="3"
				/>
			</div>
		);
	}
}

export default Search;
