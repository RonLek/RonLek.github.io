import React from "react";
import PropTypes from "prop-types";
import { Card, Badge } from "react-bootstrap";
import "./EducationItem.scss";

const EducationItem = ({ school, degree, score, highlights }) => {
  return (
    <Card className="education-card">
      <Card.Body className="education-card-body">
        <Card.Title as="h5">{school}</Card.Title>
        <Card.Text>
          {degree}
          <br />
          <span className="text-muted">{score}</span>
        </Card.Text>
        <div className="d-flex">
          {highlights.map((highlight) => (
            <Badge
              style={{ width: "max-content", marginRight: "10px" }}
              className="bg-warning p-2"
              key={highlight}
              pill
              text="dark"
            >
              {highlight}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

EducationItem.propTypes = {
  school: PropTypes.string,
  degree: PropTypes.string,
  score: PropTypes.string,
  highlights: PropTypes.array,
};

EducationItem.defaultProps = {
  school: "",
  degree: "",
  score: "",
  highlights: [],
};

export default EducationItem;
