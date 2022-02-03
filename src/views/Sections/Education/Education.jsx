import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import EducationItem from "components/EducationItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Education = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, education } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row className="text-center">
        {education.map((ed) => (
          <Col className="my-3" lg={4} key={ed.school}>
            <EducationItem {...ed} />
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

Education.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Education.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Education;
