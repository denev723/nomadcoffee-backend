export default`# graphql
scalar Upload
type Mutation {
	createCoffeeShop(
	name: String!
	latitude: String!
	longitude: String!
	category: String
	file: Upload
	): MutationResponse!
}
`