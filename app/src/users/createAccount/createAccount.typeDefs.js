export default`# graphql
type Mutation {
	createAccount(
	username: String!
	email: String!
	name: String!
	password: String!
	): MutationResponse!
}
`