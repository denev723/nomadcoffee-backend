export default`# graphql
type Mutation {
	editProfile(
	username: String
	email: String
	name: String
	password: String
	location: String
	avatar: Upload
	githubUsername: String
	): MutationResponse!
}
scalar Upload
`