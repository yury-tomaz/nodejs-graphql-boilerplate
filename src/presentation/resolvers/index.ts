const books = [
    {
      title: 'The Awakening',
      author: 'TESTE 5'
    },
    {
      title: 'City of Glass',
      author: 'Teste 2'
    },
  ];

const resolvers = {
Query: {
    books: () => books,
},

};

export default resolvers;