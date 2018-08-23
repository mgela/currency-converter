import React from "react";

import { Query } from "react-apollo";

import { getRatez } from "../queries";

const ExchangeRates = ({ currencyA, currencyB }) => (
	<Query query={getRatez} variables={{ currencyA }}>
		{({ loading, error, data }) => {
			if (loading) return <p>Loading Coins...</p>;
			if (error) return <p>Error :(</p>;

			return data.rates.map(({ currency, rate }) => {
				return currency === currencyB ? (
					<p key={currency}>{`${currency}: ${rate}`}</p>
				) : null;
			});
		}}
	</Query>
);

export default ExchangeRates;
