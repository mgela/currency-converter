import React from "react";

import Search from "./search";
import ItemWrapper from "./listItemWrapper";

class ListView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleText = evt => {
		this.setState({ [evt.target.name]: evt.target.value });
	};
	render() {
		return (
			<div className="listView">
				<h3 className="appHeader">Enter cryptocurrencies</h3>
				<Search handleCurrency={this.handleText} />
				{this.state.CurrencyA ? (
					<ItemWrapper currency={this.state.CurrencyA} />
				) : null}
			</div>
		);
	}
}

export default ListView;
