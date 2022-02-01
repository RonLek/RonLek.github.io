import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Tab, Nav, Col } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import ProjectItem from "components/ProjectItem";
import PageSection from "components/PageSection";
import "./Projects.scss";

const projectGrid = (projects) => {
  let columns = [];
  const rows = [];
  projects.forEach((project, index) => {
    columns.push(
      <ProjectItem
        key={project.header}
        imageFileName={project.imageFileName}
        header={project.header}
        subheader={project.subheader}
        content={project.content}
        imageFileNameDetail={project.imageFileNameDetail}
        date={project.date}
        links={project.links}
      />,
    );

    if ((index + 1) % 3 === 0) {
      rows.push(<Row>{columns}</Row>);
      columns = [];
    }
  });
  rows.push(columns);
  return rows;
};

const Projects = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, projects } = frontmatter;

  const visaiGrid = projectGrid(projects.visai);
  const aandwGrid = projectGrid(projects.aandw);
  const softwareGrid = projectGrid(projects.software);

  return (
    <PageSection className={clsx("portfolio-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Tab.Container id="left-tabs-example" defaultActiveKey="visai">
        <Row>
          <Col md={2} style={{ marginBottom: "50px" }}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link className="visaitab" eventKey="visai">
                  Vision & AI
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="aandwtab" eventKey="aandw">
                  App and Web
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="softwaretab" eventKey="software">
                  Software
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={10}>
            <Tab.Content>
              <Tab.Pane eventKey="visai">{visaiGrid}</Tab.Pane>
              <Tab.Pane eventKey="aandw">{aandwGrid}</Tab.Pane>
              <Tab.Pane eventKey="software">{softwareGrid}</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </PageSection>
  );
};

Projects.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Projects.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Projects;
