import { Col } from "react-bootstrap";
import { ArrowUpRight, ArrowUpRightSquare } from "react-bootstrap-icons";
export const ProjectCard = ({ title, description, imgUrl, onClick }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} style={{ minHeight: "200px" }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <button
            onClick={(e) => onClick(e)}
            style={{
              marginTop: "20px",
              textDecoration: "underline",
              justifySelf: "flex-end",
              fontWeight: "600",
            }}
          >
            view github repository <ArrowUpRightSquare />
          </button>
        </div>
      </div>
    </Col>
  );
};
