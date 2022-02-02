import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import * as SocialIcons from "components/SocialIcons";
import "./Me.scss";

const Me = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, me } = frontmatter;
  const { twitter, scholar, linkedin, github, medium } = me.social;

  const twitterPart = twitter ? <SocialIcons.Twitter userName={twitter} /> : null;
  const scholarPart = scholar ? <SocialIcons.Scholar userName={scholar} /> : null;
  const linkedinPart = linkedin ? <SocialIcons.Linkedin userName={linkedin} /> : null;
  const githubPart = github ? <SocialIcons.Github userName={github} /> : null;
  const mediumPart = medium ? <SocialIcons.Medium userName={medium} /> : null;
  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        <Col lg={12} className="mx-auto my-5 text-center">
          <p className="text-dark" dangerouslySetInnerHTML={{ __html: me.content }} />
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
        {githubPart}
        {linkedinPart}
        {twitterPart}
        {scholarPart}
        {mediumPart}
      </div>
    </PageSection>
  );
};

Me.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Me.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Me;
