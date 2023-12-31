export default `# graphql
type SeeFollowersResult {
	ok: Boolean!
	error: String
	followers: [User]
}
type Query {
	seeFollowers(username: String!, lastId: Int!): SeeFollowersResult!
}
`;