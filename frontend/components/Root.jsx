/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { MuiThemeProvider } from "material-ui/styles";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import ActionCable from "actioncable";
import ActionCableLink from "graphql-ruby-client/subscriptions/ActionCableLink";

import muiTheme from "../theme";
import Routes from "./Routes";

const cable = ActionCable.createConsumer();

const httpLink = new HttpLink({
  uri: "/graphql",
  credentials: "include",
});

const hasSubscriptionOperation = ({ query: { definitions } }) =>
  definitions.some(
    ({ kind, operation }) =>
      kind === "OperationDefinition" && operation === "subscription",
  );

const link = ApolloLink.split(
  hasSubscriptionOperation,
  new ActionCableLink({ cable }),
  httpLink,
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const Root = () => (
  <MuiThemeProvider theme={muiTheme}>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </MuiThemeProvider>
);

export default Root;
