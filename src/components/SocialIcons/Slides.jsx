import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Slides = ({ link }) => <CircleIcon href={link} iconName="SlidesIcon" />;

Slides.propTypes = {
  link: PropTypes.string.isRequired,
};

export default Slides;
