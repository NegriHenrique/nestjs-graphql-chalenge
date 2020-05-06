import React from "react";
import { Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import Routes from "./routes";
import history from "./services/history";

import api from "./services/api";

function App() {
  return (
    <ApolloProvider client={api}>
      <Router history={history}>
        <Routes />
      </Router>
    </ApolloProvider>
  );
}

export default App;
