import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const Client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

Client.query({
    query: gql`
    
    query GET_LANDING_PAGE{
      landingPage{
        header{
          title
          description
        }
      }
    }

    `
  })
  .then(result => console.log(result));

  export default Client;