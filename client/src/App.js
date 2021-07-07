import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

//establish a connection to the /graphql endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

//instantiate Apollo Client instance and create the connection to the API endpoint
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
