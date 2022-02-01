import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const YouTube = ({ link }) => <CircleIcon href={link} iconName="YouTubeIcon" />;

YouTube.propTypes = {
  link: PropTypes.string.isRequired,
};

export default YouTube;
