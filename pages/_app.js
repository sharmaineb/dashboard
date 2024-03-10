import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';

const client = new ApolloClient({
  uri: '/api/todos', // Replace this with the URI of your GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </ApolloProvider>
  );
}
