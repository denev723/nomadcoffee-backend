export default`# graphql
type User {
	id: Int!
	username: String!
	email: String!
	name: String!
	location: String
	avatar: String
	githubUsername: String
	following: [User]
	followers: [User]
	totalFollowers: Int!
	totalFollowing: Int!
	isMe: Boolean!
	isFollowing: Boolean!
	createdAt: String!
	updatedAt: String!
}
`