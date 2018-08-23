import React from "react";

import { Query } from "react-apollo";

import { getRatez } from "../queries";

const ExchangeRates = ({ currencies }) => (
	<Query query={getRatez} variables={{ currencies }}>
		{({ loading, error, data }) => {
			if (loading) return <p>Loading...</p>;
			if (error) return <p>Error :(</p>;
			return data.rates.map(({ currency, rate }) => (
				<p key={currency}>{`${currency}: ${rate}`}</p>
			));
		}}
	</Query>
);

export default ExchangeRates;
