import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

import registerServiceWorker from "./registerServiceWorker";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import ListView from "./components/listView";

//coinbase api

const client = new ApolloClient({
	uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

const App = () => (
	<ApolloProvider client={client}>
		<div className="appWrapper">
			<ListView />
		</div>
	</ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
export default App;
