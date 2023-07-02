const books = [
    {
      title: 'The Awakening',
      author: {
        name: "Yury"
      },
    },
    {
      title: 'City of Glass',
      author: {
        name: "Yury"
      },
    },
  ];

const resolvers = {
Query: {
    books: () => books,
},

};

export default resolvers;