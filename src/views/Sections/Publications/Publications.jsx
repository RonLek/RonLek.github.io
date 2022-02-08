import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import { Row, Col, Card, Button, Badge, Tooltip, OverlayTrigger, Overlay } from "react-bootstrap";
import PageSection from "components/PageSection";
import SectionHeader from "components/SectionHeader";
import Image from "components/Image";
import "./Publications.scss";

const Publications = ({ className, frontmatter }) => {
  const [showI2CTTooltip, setShowI2CTTooltip] = useState(false);
  const tooltipTarget = useRef(null);
  if (!frontmatter) {
    return null;
  }

  const { anchor, publications, header: rootHeader, subheader: rootSubHeader } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row className="publicationRow">
        <Col lg={8} xs={12}>
          <Row className="my-5 mx-1">
            <Card style={{ height: "auto", width: "100%", padding: "20px" }}>
              <Row style={{ height: "100%" }}>
                <Col xs={4} className="d-flex align-items-center">
                  <Image
                    className="ml-3"
                    fileName={publications[0].imageFileName}
                    alt={publications[0].imageFileName}
                  />
                </Col>
                <Col>
                  <Card.Body>
                    <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-icicc">
                          International Conference on Innovative Computing and Communications
                        </Tooltip>
                      }
                    >
                      <Badge className="mb-3" variant="warning">
                        ICICC-2020
                      </Badge>
                    </OverlayTrigger>
                    <Card.Title style={{ fontSize: "1rem" }}>
                      FastV2C-HandNet : Fast Voxel to Coordinate Hand Pose Estimation with 3D
                      Convolutional Neural Networks
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      <strong>Rohan Lekhwani</strong>, Bhupendra Singh
                    </Card.Subtitle>
                    <div className="flex flex-row mt-3">
                      <a
                        href="https://link.springer.com/chapter/10.1007/978-981-15-5113-0_31"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button className="mr-2" variant="success">
                          Paper
                        </Button>
                      </a>
                      <a
                        href="https://github.com/RonLek/FastV2C-HandNet"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button variant="success">Code</Button>
                      </a>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Row>
          <Row className="my-5 mx-1">
            <Card style={{ height: "auto", width: "100%", padding: "20px" }}>
              <Row style={{ height: "100%" }}>
                <Col xs={4} className="d-flex align-items-center">
                  <Image
                    className="ml-3"
                    fileName={publications[1].imageFileName}
                    alt={publications[1].imageFileName}
                  />
                </Col>
                <Col>
                  <Card.Body>
                    <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-icicc">
                          International Conference for Convergence in Technology
                        </Tooltip>
                      }
                    >
                      <Badge className="mb-3" variant="warning">
                        I2CT-2022
                      </Badge>
                    </OverlayTrigger>
                    <Card.Title style={{ fontSize: "1rem" }}>
                      Modeling and Predicting the COVID-19 Trajectory in India
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Nagasaikiran Karra, <strong>Rohan Lekhwani</strong>, Bhupendra Singh, Tanmoy
                      Hazra
                    </Card.Subtitle>
                    <div className="flex flex-row mt-3">
                      <Button
                        className="mr-2"
                        variant="success"
                        ref={tooltipTarget}
                        onClick={() => setShowI2CTTooltip(!showI2CTTooltip)}
                        onBlur={() => setShowI2CTTooltip(false)}
                      >
                        Paper
                      </Button>
                      <Overlay
                        target={tooltipTarget.current}
                        show={showI2CTTooltip}
                        placement="right"
                        transition={true}
                      >
                        {(props) => (
                          <Tooltip id="tooltip-i2ct" {...props}>
                            To appear in April 2022
                          </Tooltip>
                        )}
                      </Overlay>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Row>
        </Col>
        <Col lg={4} xs={12}>
          <div className="hand-hero">
            <Image
              className="mx-auto"
              style={{ height: "25rem", width: "17rem" }}
              fileName="publications/hand point cloud.png"
              alt="publications/hand point cloud.png"
            />
            <p>
              <strong>
                <i>2D Hand Pose After Voxelization</i>
              </strong>
            </p>
          </div>
        </Col>
      </Row>
    </PageSection>
  );
};

Publications.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Publications.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Publications;
