import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Live = ({ link }) => <CircleIcon href={link} iconName="LiveIcon" />;

Live.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Live;
