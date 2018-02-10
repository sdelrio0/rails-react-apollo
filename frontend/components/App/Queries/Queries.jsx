import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Typography } from "material-ui";

const MY_QUERY = gql`
  query {
    testField
  }
`;

const Queries = props => (
  <Typography>Queries: {props.data.testField}</Typography>
);

Queries.propTypes = {
  data: PropTypes.shape({
    testField: PropTypes.string,
  }),
};

Queries.defaultProps = {
  data: "Loading...",
};

export default graphql(MY_QUERY)(Queries);
