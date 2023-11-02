export default`# graphql
type Category {
	id: Int!
	name: String!
	slug: String!
	shops(lastId: Int): [CoffeeShop]
	totalShops: Int!
	createdAt: String!
	updatedAt: String!
}
`