import React from "react";
import { Link } from "react-router-dom";

import { PlaceholderWrapper } from "./styled";

const Placeholder = () => {
  return (
    <PlaceholderWrapper>
      <h2>Sublinks Placeholder</h2>
      <p>This is a placeholder for the sublinks content.</p>
      <Link to="/">Go Back to Home</Link>
    </PlaceholderWrapper>
  );
};

export default Placeholder;
