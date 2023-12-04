import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Whatsapp } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://wa.me/670182875">
                <Whatsapp style={{ color: "green" }} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100082102583710&mibextid=LQQJ4d">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/zufichris/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2023. Amah Christian prod. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
