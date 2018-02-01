import React from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";

const Hello = props => <div>Hello {props.name}!</div>;

Hello.defaultProps = {
  name: "David"
};

Hello.propTypes = {
  name: PropTypes.string
};

export default Hello;
