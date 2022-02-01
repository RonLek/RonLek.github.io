import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Github = ({ userName, link }) => (
  <CircleIcon href={link || `https://github.com/${userName}`} iconName="GithubIcon" />
);

Github.defaultProps = {
  userName: null,
  link: null,
};

Github.propTypes = {
  userName: PropTypes.string,
  link: PropTypes.string,
};

export default Github;
