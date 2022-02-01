import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Medium = ({ userName, link }) => (
  <CircleIcon href={link || `https://medium.com/@${userName}`} iconName="MediumIcon" />
);

Medium.defaultProps = {
  userName: null,
  link: null,
};

Medium.propTypes = {
  userName: PropTypes.string,
  link: PropTypes.string,
};

export default Medium;
