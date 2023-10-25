export default`# graphql
type User {
	id: Int!
	username: String!
	email: String!
	name: String!
	location: String
	avatarURL: String
	githubUsername: String
	createdAt: String!
	updatedAt: String!
}
type CreateAccountResult {
	ok: Boolean!
	error: String
}
type Mutation {
	createAccount (
	username: String!
	email: String!
	name: String!
	password: String!
	): CreateAccountResult!
}
type Query {
	seeProfile(username: String): User
}
`