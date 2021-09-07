import { Col, Row } from "react-bootstrap";
import { HiOutlineLightBulb } from "react-icons/hi";
const Feature = ({ title, description, icon}) => {
  return (
    <Col >
      <div className="d-flex feature_card">
        <span className="feature_icon m-2">{icon}</span>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
};

export default Feature;
