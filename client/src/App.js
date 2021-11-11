import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink, } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Login from './components/home/Login';
import Dashboard from './components/profile/Dashboard';
import Match from './components/match/Match';
import Maps from './components/maps/Maps';
import Comments from './components/comments/Comments';
import Navigation from './components/navigation/Navigation';
import { AuthProvider } from "./components/profile/Auth";


const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <div className="mainContent">
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route path="/match" component={Match} />
              <Route path="/maps" component={Maps} />
              <Route path="/comments" component={Comments} />
            </div>
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
