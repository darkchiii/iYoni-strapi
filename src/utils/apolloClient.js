import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';

const link = new HttpLink ({
  // uri: `http://localhost:1337/grapghql` 
  // || 'http://localhost:3000/graphql' ,
  // fetchOptions: {
  //   mode: "no-corse" 
  // }
  // headers: {
  //   authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEzNjU1NDc1LCJleHAiOjE2MTYyNDc0NzV9.VkRblc7oWDYKVA9aaqx7sonTY8Kg7AxfwHYLgyQVADw"
  // }
});
const cache =  new InMemoryCache() ;


// const client = new ApolloClient({
//   link: HttpLink({
//     uri: "/graphql",
//     fetch: customFetch,
//   }),
//   cache: new InMemoryCache()
// });


const client = new ApolloClient({
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  uri:'https://strapi-iyoni.herokuapp.com/graphql',
    cache: new InMemoryCache()
});

// client
//   .query({
//     query: gql`
//     query Articles {
//       articles {
//         slug
//         title
//         category {
//           slug
//           name
//         }
//         image {
//           url
//         }
//       }
//     }
//   `
//   })
//   .then(result => console.log(result));

export default client ;

// ${process.env.REACT_APP_BACKEND_URL}