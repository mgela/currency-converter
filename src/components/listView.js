import React from "react";
import ReactDOM from "react-dom";

import gql from "graphql-tag";
import { Query } from "react-apollo";

const ListView = () => (
	<Query
		query={gql`
			{
				rates(currency: "USD") {
					currency
					rate
				}
			}
		`}>
		{({ loading, error, data }) => {
			if (loading) return <p>Loading...</p>;
			if (error) return <p>Error :(</p>;

			return data.rates.map(({ currency, rate }) => (
				<div key={currency}>
					<p>{`${currency} at ${rate}`}</p>
				</div>
			));
		}}
	</Query>
);

export default ListView;
