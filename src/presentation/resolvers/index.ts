const books = [
    {
      title: 'The Awakening',
      author: 'Yury'
    },
    {
      title: 'City of Glass',
      author: 'Teste'
    },
  ];

const resolvers = {
Query: {
    books: () => books,
},

};

export default resolvers;