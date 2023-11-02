export default`# graphql
scalar Upload
type Mutation {
	editCoffeeShop(
	id: Int!
	name: String
	latitude: String
	longitude: String
	file: Upload
	category: String
	): MutationResponse!
}
`