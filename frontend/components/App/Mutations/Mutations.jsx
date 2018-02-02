import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Typography } from "material-ui";

class Mutations extends Component {
  static propTypes = {
    mutate: PropTypes.shape({
      variables: PropTypes.shape({
        myVar: PropTypes.string,
      }),
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      result: null,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props
      .mutate({
        variables: {
          myVar: "lorem ipsum!",
        },
      })
      .then(({ data }) => {
        this.setState({ result: data.testField });
      })
      .catch(error => {
        console.log("there was an error sending the query", error);
      });
  }

  render() {
    const { result } = this.state;

    return (
      <Typography onClick={this.onClick}>
        Click for mutation: {result}
      </Typography>
    );
  }
}

const submitRepository = gql`
  mutation {
    testField
  }
`;

export default graphql(submitRepository)(Mutations);
