import { Col, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footer">
        <Row>
          <Col> 
            <div>
              <h4>Professor: </h4>
              {/* <p><a href="//facebook.com" target="_blank">Facebooj</a></p> */}
              <p>Fausto</p>
            </div>
          </Col>
          <Col>
            <div>
              <h4>Aluna: </h4>
              <p>Maria Eduarda Benevenutti</p>
            </div>
          </Col>
          <Col>
            <div>
              <h4>Assunto: </h4>
              <p>React</p>
            </div>
          </Col>
        </Row>
    </div>
  );
}
