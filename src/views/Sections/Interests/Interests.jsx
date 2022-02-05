import React, { useState } from "react";
import PropTypes from "prop-types";

import { Row, Modal, Button } from "react-bootstrap";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import "./Interests.scss";

const Interests = ({ className, frontmatter }) => {
  const [show, setShow] = useState(false);

  if (!frontmatter) {
    return null;
  }
  const { anchor, header: rootHeader, subheader: rootSubHeader, content } = frontmatter;
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row className="justify-content-start">
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <p>
          I love to travel and visit new places. Check out my{" "}
          <span className="span-link" role="button" tabIndex={0} onClick={handleShow}>
            World Domination!
          </span>{" "}
          conquest so far!
        </p>
        <Modal show={show} onHide={handleClose} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title>🌎 World Domination</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/d/u/0/embed?mid=1y5AsHOyVuqNUGj2g2wrZCjyGRt-HqSu3"
              width="100%"
              style={{ height: "25rem" }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </PageSection>
  );
};

Interests.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Interests.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Interests;
