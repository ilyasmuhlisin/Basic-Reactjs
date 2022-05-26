import React from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  Badge,
  Button,
  Breadcrumb,
  ButtonGroup,
  ButtonToolbar,
  Card,
  Carousel,
} from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/halaman">Info</Breadcrumb.Item>
        </Breadcrumb>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              alt="gambar1"
              src=" https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg "
            />
            <Carousel.Caption>
              <h3>Tiket Pesawat</h3>
              <p>Dapatkan Promo</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              alt="gambar1"
              src=" https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png"
            />
            <Carousel.Caption>
              <h3>Tiket Pesawat</h3>
              <p>Dapatkan Promo</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              alt="gambar1"
              src=" https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg"
            />
            <Carousel.Caption>
              <h3>Tiket Pesawat</h3>
              <p>Dapatkan Promo</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br/>
        <Row>
          <Col>1 of 2</Col>
          <Col>
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="me-2" aria-label="First group">
                <Button>1</Button> <Button>2</Button> <Button>3</Button>{" "}
                <Button>4</Button>
              </ButtonGroup>
              <ButtonGroup className="me-2" aria-label="Second group">
                <Button>5</Button> <Button>6</Button> <Button>7</Button>
              </ButtonGroup>
              <ButtonGroup aria-label="Third group">
                <Button>8</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert variant="primary">User Selamat Datang</Alert>
          </Col>
          <Col>
            <h3>
              user
              <Badge bg="secondary">New</Badge>
            </h3>
            <Button variant="primary">
              Profile <Badge bg="secondary">9</Badge>
            </Button>
          </Col>
          <Col>
            <Button variant="primary">tes</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card style={{ width: "300px" }}>
              <Card.Img
                variant="top"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png "
              />
              <Card.Body>
                <Card.Title>Sate</Card.Title>
                <Card.Text>Sate adalaha makanan</Card.Text>
                <Button variant="primary">tes</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
