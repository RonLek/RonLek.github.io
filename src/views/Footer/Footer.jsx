import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";
import Love from "../../../content/assets/images/logos/love.png";

const Footer = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { copyright } = frontmatter;

  return (
    <footer className="footer py-3">
      <Container>
        <Row className="d-flex flex-row justify-content-center align-items-center">
          <p>
            {" "}
            Made with <img alt="Love" src={Love} /> by Rohan Lekhwani{" "}
          </p>
        </Row>
        <Row className="align-items-center text-center">
          <Col lg={5} className="text-lg-left">
            {copyright}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
