import { Container, Row, Col, Button } from "react-bootstrap";
import { FaApple, FaGooglePlay } from "react-icons/fa"; // Import icons

const PurposeSection = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          {/* Left Column - Phone-like Image */}
          <Col lg={6} className="mb-4 mb-lg-0 d-flex justify-content-center">
            <div
              className="shadow-lg"
              style={{
                width: "260px",
                height: "520px",
                borderRadius: "40px",
                overflow: "hidden",
                border: "8px solid #000",
              }}
            >
              <img
                src="/images/CafeDine.jpg"
                alt="App Preview"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </Col>

          {/* Right Column - Text Content */}
          <Col lg={6}>
            <div className="purpose-content ps-lg-4">
              <div className="mb-4">
                <p className="lead text-danger fw-bold">Make it easy</p>
              </div>

              <div className="mb-4">
                <p className="h2 mb-1 fw-bold">Get The CafeDine</p>
                <p className="text-muted">
                  Get instant access to recipes from celebrity Cafedia and
                  world-renowned brands right in your pocket.
                </p>
              </div>

              {/* App Store Buttons - No background box */}
              <div className="d-flex flex-wrap gap-3">
                <Button
                  variant="dark"
                  className="rounded-pill px-4 py-2 d-flex align-items-center"
                >
                  <FaApple className="me-2" /> App Store
                </Button>
                <Button
                  variant="dark"
                  className="rounded-pill px-4 py-2 d-flex align-items-center"
                >
                  <FaGooglePlay className="me-2" /> Play Store
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PurposeSection;
