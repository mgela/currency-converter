import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

import registerServiceWorker from "./registerServiceWorker";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import ListView from "./components/listView";

const client = new ApolloClient({
	uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

const App = () => (
	<ApolloProvider client={client}>
		<div className="appWrapper">
			<ListView />
			{/* <ListItem /> */}
			{/* <ExchangeRates /> */}
		</div>
	</ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
