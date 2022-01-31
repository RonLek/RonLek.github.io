import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Row, Tab, Nav, Col } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import ProjectItem from "components/ProjectItem";
import PageSection from "components/PageSection";
import "./Projects.scss";

const Projects = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, projects } = frontmatter;
  // let columns = [];
  const rows = [];

  console.log("Projects = ", projects);
  // portfolios.visai.forEach((portfolio, index) => {
  //   columns.push(
  //     <PortfolioItem
  //       key={portfolio.header}
  //       imageFileName={portfolio.imageFileName}
  //       header={portfolio.header}
  //       subheader={portfolio.subheader}
  //       content={portfolio.content}
  //       imageFileNameDetail={portfolio.imageFileNameDetail}
  //       extraInfo={
  //         <ul>
  //           {portfolio.extraInfo.map((ei) => (
  //             <li key={ei}>{ei}</li>
  //           ))}
  //         </ul>
  //       }
  //     />,
  //   );

  //   if ((index + 1) % 3 === 0) {
  //     rows.push(<Row>{columns}</Row>);
  //     columns = [];
  //   }
  // });

  return (
    <PageSection className={clsx("portfolio-section", className)} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">{rows}</Tab.Pane>
              <Tab.Pane eventKey="second">
                <h1>Hello World</h1>
              </Tab.Pane>
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
