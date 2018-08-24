import React from "react";

import { Query } from "react-apollo";

import { getRatez } from "../queries";

const NoCurrency = () => (
	<div>
		<p className="currencyItem">None available, please use any from:</p>
		<a href="https://www.ibm.com/support/knowledgecenter/en/SSZLC2_7.0.0/com.ibm.commerce.payments.developer.doc/refs/rpylerl2mst97.htm">
			<h3 className="currencyItem">Currency ISO Codes List</h3>
		</a>
	</div>
);

const ExchangeRates = ({ currencyA, currencyB }) => (
	<Query query={getRatez} variables={{ currencyA }}>
		{({ loading, error, data }) => {
			if (loading) return <p className="currencyItem">Loading Currencies...</p>;
			if (error) return <p>Error :(</p>;
			if (!data.rates) {
				return <NoCurrency />;
			}

			let filterData = data.rates.filter(
				({ currency, rate }) => currency === currencyB
			);
			if (filterData.length) {
				return (
					<p className="currencyItem">{`${filterData[0].currency}: ${
						filterData[0].rate
					}`}</p>
				);
			} else {
				return <NoCurrency />;
			}
		}}
	</Query>
);

export default ExchangeRates;
