import React, { Component } from "react";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleText = evt => {
		this.setState({ [evt.target.name]: evt.target.value });
	};

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
