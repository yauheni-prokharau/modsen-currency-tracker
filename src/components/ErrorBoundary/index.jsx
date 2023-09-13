import React from "react";
import PropTypes from "prop-types";

import { ErrorBoundaryWrapper, ErrorBoundaryMessage } from "./styled";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <ErrorBoundaryWrapper>
          <ErrorBoundaryMessage>
            <h1>Oops!</h1>
            <h2>An error occurred</h2>
            <p>{error && error.toString()}</p>
          </ErrorBoundaryMessage>
        </ErrorBoundaryWrapper>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
