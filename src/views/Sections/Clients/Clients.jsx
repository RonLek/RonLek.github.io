import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import { Row, Col, Card, Button, Badge, Tooltip, OverlayTrigger, Overlay } from "react-bootstrap";
import PageSection from "components/PageSection";
import Image from "components/Image";
import "./Clients.scss";

const Clients = ({ className, frontmatter }) => {
  const [showI2CTTooltip, setShowI2CTTooltip] = useState(false);
  const tooltipTarget = useRef(null);
  if (!frontmatter) {
    return null;
  }

  const { anchor } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <Col lg={8} xs={12}>
          <Row className="my-5 mx-1">
            <Card style={{ height: "15rem", width: "40rem" }}>
              <Row style={{ height: "100%" }}>
                <Col xs={4} className="d-flex align-items-center">
                  <Card.Img
                    variant="top"
                    src="https://ronlek.github.io/img/research/fastv2c-handnet.png"
                    style={{ height: "80%" }}
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
                    <Card.Title style={{ "font-size": "1.25rem" }}>
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
            <Card style={{ height: "15rem", width: "40rem" }}>
              <Row style={{ height: "100%" }}>
                <Col xs={4} className="d-flex align-items-center">
                  <Card.Img
                    variant="top"
                    src="https://ronlek.github.io/img/research/fastv2c-handnet.png"
                    style={{ height: "80%" }}
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
                    <Card.Title style={{ "font-size": "1.25rem" }}>
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
          Hero Section
          {/* <div className="hand-hero">
            <Image
              className="mx-auto"
              style={{ height: "80%" }}
              fileName="publications/hand point cloud.png"
              alt="publications/hand point cloud.png"
            />
            <p>Voxelized H</p>
          </div> */}
        </Col>
      </Row>
    </PageSection>
  );
};

Clients.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Clients.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Clients;
