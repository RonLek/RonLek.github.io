import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Link = ({ link }) => <CircleIcon href={link} iconName="LinkIcon" />;

Link.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Link;
