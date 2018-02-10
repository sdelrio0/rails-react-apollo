import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Typography } from "material-ui";

const MY_QUERY = gql`
  subscription {
    testField
  }
`;

const Subscriptions = props => (
  <Typography>Subscriptions: {props.data.testField}</Typography>
);

Subscriptions.propTypes = {
  data: PropTypes.shape({
    testField: PropTypes.string,
  }),
};

Subscriptions.defaultProps = {
  data: "Loading...",
};

export default graphql(MY_QUERY)(Subscriptions);
