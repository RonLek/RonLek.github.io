import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Scholar = ({ userName }) => (
  <CircleIcon
    href={`https://scholar.google.com/citations?hl=en&user=${userName}`}
    iconName="ScholarIcon"
  />
);

Scholar.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Scholar;
