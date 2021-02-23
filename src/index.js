
import React from 'react';
import App from './App';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import client from "./utils/apolloClient" ;


ReactDOM.render(
  <Router>
     <ApolloProvider client={client}>
      <App/>
    </ApolloProvider> 
   </Router>,
  document.getElementById('root')
);