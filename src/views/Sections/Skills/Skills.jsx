import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

import "./Skills.scss";

const Skills = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, skills } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        <h3>Programming Languages</h3>
      </Row>
      <Row>
        {skills.languages.map((language) => (
          <Col lg={1} xs={3} sm={2} key={language} className="my-1">
            <div className="d-flex flex-column align-items-center text-center">
              <i
                className={
                  language === "C++"
                    ? `devicon-cplusplus-plain devicon`
                    : `devicon-${language.replace(/ /g, "").toLowerCase()}-plain devicon`
                }
              />
              <span style={{ marginTop: "5px" }}>{language}</span>
            </div>
          </Col>
        ))}
      </Row>
      <br />
      <Row>
        <h3>Platforms</h3>
      </Row>
      <Row>
        {skills.platforms.map((platform) => (
          <Col lg={1} xs={3} sm={2} key={platform} className="my-1">
            <div className="d-flex flex-column align-items-center text-center">
              <i className={`devicon-${platform.replace(/ /g, "").toLowerCase()}-plain devicon`} />
              <span style={{ marginTop: "5px" }}>{platform}</span>
            </div>
          </Col>
        ))}
      </Row>
      <br />
      <Row>
        <h3>Libraries and Frameworks</h3>
      </Row>
      <Row>
        {skills.landf.map((lib) => (
          <Col lg={1} xs={3} sm={2} key={lib} className="my-1">
            <div className="d-flex flex-column align-items-center text-center">
              {lib === "Terraform" ? (
                <img
                  width="50px"
                  height="50px"
                  alt={lib}
                  src="https://cdn.cdnlogo.com/logos/t/16/terraform-enterprise.svg"
                />
              ) : (
                <i
                  className={`devicon-${lib.replace(/ /g, "").toLowerCase()}-original devicon-${lib
                    .replace(/ /g, "")
                    .toLowerCase()}-plain devicon`}
                />
              )}

              <span style={{ marginTop: "5px" }}>{lib}</span>
            </div>
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

Skills.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Skills.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Skills;
