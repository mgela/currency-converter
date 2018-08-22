import React from "react";

import Search from "./search";
import ItemWrapper from "./listItemWrapper";

const ListView = () => (
	<div className="listView">
		<h3 className="appHeader">Enter cryptocurrencies</h3>
		<Search />
		<ItemWrapper />
	</div>
);

export default ListView;
