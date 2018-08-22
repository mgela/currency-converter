import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";

import registerServiceWorker from "./registerServiceWorker";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";

import ExchangeRates from "./components/rates";
import ListView from "./components/listView";
import ListItem from "./components/listItem";

const client = new ApolloClient({
	uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

const App = () => (
	<ApolloProvider client={client}>
		<div className="appWrapper">
			{/* <ListView /> */}
			<ListItem />
			{/* <ExchangeRates /> */}
		</div>
	</ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
