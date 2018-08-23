import React from "react";

import Search from "./search";
import ItemWrapper from "./listItemWrapper";

class ListView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleText = evt => {
		this.setState({ [evt.target.name]: evt.target.value.toUpperCase() });
	};

	renderCurrencies = () => {
		return this.state.CurrencyB &&
			this.state.CurrencyB.length > 2 &&
			this.state.CurrencyA &&
			this.state.CurrencyA.length > 2 ? (
			<ItemWrapper
				currencyA={this.state.CurrencyA}
				currencyB={this.state.CurrencyB}
			/>
		) : null;
	};
	render() {
		return (
			<div className="listView">
				<h3 className="appHeader">Currency converter</h3>
				<Search handleCurrency={this.handleText} />
				{this.renderCurrencies()}
			</div>
		);
	}
}

export default ListView;
