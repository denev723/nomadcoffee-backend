export default`# graphql
type Query {
	seeProfile(username: String!, followersLastId: Int, followingLastId: Int): User
}
`