const typeDefs = `#graphql
    type Book {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }

    type Mutation {
        addBook(title: String, author: String): Book
    }
`;

export default typeDefs;