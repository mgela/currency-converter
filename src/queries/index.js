import gql from "graphql-tag";

export const getRatez = gql`
	query Rates($currencyA: String!) {
		rates(currency: $currencyA) {
			currency
			rate
		}
	}
`;
