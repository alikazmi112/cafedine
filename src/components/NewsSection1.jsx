import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import blogImg1 from "/images/1.jpg";
import blogImg2 from "/images/2.jpg";
import blogImg3 from "/images/3.jpg";
import user1 from "/images/author1.jpg";
import user2 from "/images/author2.jpg";
import user3 from "/images/author1.jpg";
import "../css/NewsSection.css";
import AboutSection from "./AboutSection";

const NewsSection1 = () => {
  return (
    <>
      <AboutSection />
      <section className="news-section py-5">
        <Container>
          <Row>
            {/* Blog Post Content */}
            <Col lg={8}>
              <div className="mb-5">
                <img
                  src={blogImg1}
                  alt="The Festive Season Is Approaching"
                  className="img-fluid mb-3 rounded"
                />
                <div className="small text-uppercase text-muted mb-2">
                  <span className="text-danger">Cooking</span> | Oct 16, 2019 |
                  06 Comment(s)
                </div>
                <h1 className="fw-bold">
                  If You Are Starting Off With A New<br></br> Domain Name With
                  No Traffic So <br></br>To Speak Of You.
                </h1>
                <p className="text-muted">
                  The little rotter spiffing good time lemon squeezy smashing
                  excuse my french old, cheesed off give us a bell happy days
                  brown bread, blow off Harry barney bobby. Cup of char gormless
                  hors.!
                </p>
                <p className="text-muted">
                  If you are starting off with a new domain name with no traffic
                  so to speak of you... Porro odio aperiam nostrum sequi
                  mollitia, sapiente eos aspernatur obcaecati molestias
                  cupiditate autem, tempora dicta esse.
                </p>
                <p className="text-muted">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system...
                </p>
                <p className="text-muted">
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users.
                  Dramatically visualize customer convergence without
                  revolutionary ROI.
                </p>

                {/* Share Icons */}
                <div className="mb-4">
                  <strong>Share Now:</strong>{" "}
                  <i className="bi bi-facebook ms-2 me-2"></i>
                  <i className="bi bi-twitter me-2"></i>
                  <i className="bi bi-linkedin me-2"></i>
                  <i className="bi bi-pinterest me-2"></i>
                </div>

                {/* Comments Section */}
                <div className="mb-5">
                  <h5 className="fw-bold">3 Comments</h5>
                  <ul className="list-unstyled">
                    {[
                      {
                        name: "John Doe",
                        image: user1,
                        text: "Maecenas fermentum consequat mi Donec fermentum Pelle maleuada nulla amiuis sapien sem aliquet nec commodo eget consequat",
                      },
                      {
                        name: "Jennifer S. Bowen",
                        image: user2,
                        text: "Maecenas fermentum consequat mi Donec fermentum Pelle maleuada nulla amiuis sapien sem aliquet nec commodo eget",
                      },
                      {
                        name: "Omar Elnagar",
                        image: user3,
                        text: "Maecenas fermentum consequat mi Donec fermentum Pelle maleuada nulla amiuis sapien sem aliquet nec commodo eget consequat",
                      },
                    ].map((comment, index) => (
                      <li
                        key={index}
                        className="mb-4 d-flex align-items-start gap-3"
                      >
                        <img
                          src={comment.image}
                          alt={comment.name}
                          className="rounded-circle"
                          width={50}
                          height={50}
                        />
                        <div>
                          <strong>{comment.name}</strong>
                          <p className="text-muted small mb-1">
                            {comment.text}
                          </p>
                          <Button variant="outline-secondary" size="sm">
                            Reply
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Leave Comment Form */}
                <div>
                  <h5 className="fw-bold">Leave a comment</h5>
                  <Form>
                    <Row className="mb-3">
                      <Col md={6}>
                        <Form.Control placeholder="Your name" />
                      </Col>
                      <Col md={6}>
                        <Form.Control placeholder="Your email" />
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Your comment"
                      />
                    </Form.Group>
                    <Button variant="danger">Post Comment</Button>
                  </Form>
                </div>
              </div>
            </Col>

            {/* Sidebar */}
            <Col lg={4}>
              <div className="sidebar">
                {/* Search */}
                <div className="mb-4">
                  <Form.Control
                    type="text"
                    placeholder="Search..."
                    className="rounded-pill"
                  />
                </div>

                {/* Follow Us */}
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">Follow Us</h5>
                  <div className="d-flex gap-2">
                    {[
                      "facebook",
                      "twitter",
                      "instagram",
                      "pinterest",
                      "youtube",
                    ].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="text-dark fs-5"
                        title={platform}
                      >
                        <i className={`bi bi-${platform}`}></i>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Popular Posts */}
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">Popular Posts</h5>
                  {[blogImg1, blogImg2, blogImg3].map((img, index) => (
                    <div
                      key={index}
                      className="d-flex mb-3 small-post align-items-center"
                    >
                      <img
                        src={img}
                        alt="Popular"
                        className="me-3 rounded"
                        width={60}
                        height={60}
                      />
                      <div>
                        <strong className="d-block small">
                          {
                            [
                              "Salted Fried Chicken",
                              "Lemon Rosemary Rice",
                              "Join Us For A Delicious Event",
                            ][index]
                          }
                        </strong>
                        <span className="text-muted small">May 16, 2019</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Categories */}
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">Categories</h5>
                  <ul className="list-unstyled text-muted">
                    <li>Web Design (14)</li>
                    <li>Development (12)</li>
                    <li>Marketing (10)</li>
                    <li>Video Production (1)</li>
                  </ul>
                </div>

                {/* Popular Tags */}
                <div>
                  <h5 className="fw-bold mb-3">Popular Tags</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {[
                      "Design",
                      "Marketing",
                      "Development",
                      "SEO",
                      "Agency",
                      "WordPress",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="bg-light px-2 py-1 rounded small border tag-hover"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NewsSection1;
