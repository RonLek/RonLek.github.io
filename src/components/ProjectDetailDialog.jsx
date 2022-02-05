import React from "react";
import PropTypes from "prop-types";

import { Modal, Button, Row, Col } from "react-bootstrap";
import Image from "components/Image";
import * as SocialIcons from "components/SocialIcons";
import Icon from "./Icon";
import "./ProjectDetailDialog.scss";

const ProjectDetailDialog = ({
  onHide,
  imageFileName,
  imageAlt,
  header,
  subheader,
  content,
  date,
  links,
  ...restProps
}) => {
  return (
    <Modal
      {...restProps}
      onHide={onHide}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-auto">
        <Row>
          <Col xs={4}>
            <Image
              width="100%"
              height="auto"
              className="img-fluid d-block"
              fileName={imageFileName}
              alt={imageAlt || header || subheader}
            />
          </Col>
          <Col xs={8}>
            <div style={{ marginLeft: "50px" }}>
              <h6>Description</h6>
              <p
                style={{ fontSize: "1em", lineHeight: "1.2em" }}
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <br />
              <h6>Date</h6>
              <p style={{ fontSize: "1em", lineHeight: "1.2em" }}>{date}</p>
              <br />
              <h6>Links</h6>
              {links.map((link) => {
                if (link.name === "Github")
                  return <SocialIcons.Github key={`link-${link.name}`} link={link.url} />;
                if (link.name === "Presentation")
                  return <SocialIcons.Slides key={`link-${link.name}`} link={link.url} />;
                if (link.name === "Medium")
                  return <SocialIcons.Medium key={`link-${link.name}`} link={link.url} />;
                if (link.name === "Live")
                  return <SocialIcons.Live key={`link-${link.name}`} link={link.url} />;
                if (link.name === "YouTube")
                  return <SocialIcons.YouTube key={`link-${link.name}`} link={link.url} />;
                return <SocialIcons.Link key={`link-${link.name}`} link={link.url} />;
              })}
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <div className="mx-auto">
          <Button variant="primary" onClick={onHide}>
            <Icon iconName="CloseIcon" />
            &nbsp; Close Project
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

ProjectDetailDialog.propTypes = {
  onHide: PropTypes.func,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
};

ProjectDetailDialog.defaultProps = {
  onHide: null,
  imageFileName: "",
  imageAlt: null,
  header: "",
  subheader: "",
  content: "",
  date: "",
  links: [],
};

export default ProjectDetailDialog;
