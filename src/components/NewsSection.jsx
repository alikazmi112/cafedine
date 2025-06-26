import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import blogImg1 from "/images/1.jpg";
import blogImg2 from "/images/2.jpg";
import blogImg3 from "/images/3.jpg"; // Add your 3rd image
import blogImg4 from "/images/4.jpg"; // Add your 4th image
import "../css/NewsSection.css";
import AboutSection from "./AboutSection";

const blogPosts = [
  {
    id: 1,
    image: blogImg1,
    category: "Cooking",
    date: "Oct 16, 2019",
    comments: "06 Comment(s)",
    title: "The Festive Season Is Approaching",
    excerpt:
      "The little rotter spiffing good time lemon squeezy smashing excuse my french old, cheesed off give us a bell happy days brown bread, blow off Harry barney bobby. Cup of char gormless hors.!",
  },
  {
    id: 2,
    image: blogImg2,
    category: "Cooking",
    date: "Oct 16, 2019",
    comments: "06 Comment(s)",
    title: "Join Us For A Delicious Event",
    excerpt:
      "The little rotter spiffing good time lemon squeezy smashing excuse my french old, cheesed off give us a bell happy days brown bread, blow off Harry barney bobby. Cup of char gormless hors.!",
  },
  {
    id: 3,
    image: blogImg3,
    category: "Cooking",
    date: "Oct 17, 2019",
    comments: "04 Comment(s)",
    title: "Salted Chicken Fried Rice",
    excerpt:
      "The little rotter spiffing good time lemon squeezy smashing excuse my french old, cheesed off give us a bell happy days brown bread, blow off Harry barney bobby. Cup of char gormless hors.!",
  },
  {
    id: 4,
    image: blogImg4,
    category: "Cooking",
    date: "Oct 18, 2019",
    comments: "02 Comment(s)",
    title: "Rastaurex Crab With Curry",
    excerpt:
      "The little rotter spiffing good time lemon squeezy smashing excuse my french old, cheesed off give us a bell happy days brown bread, blow off Harry barney bobby. Cup of char gormless hors.!",
  },
];

const NewsSection = () => {
  return (
    <>
      <AboutSection />
      <section className="news-section py-5">
        <Container>
          <Row>
            {/* Blog Posts */}
            <Col lg={8}>
              {blogPosts.map((post) => (
                <div key={post.id} className="mb-5 d-flex flex-column gap-2">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="img-fluid mb-3 rounded"
                  />
                  <div className="small text-uppercase text-muted mb-2">
                    <span className="text-danger">{post.category}</span>{" "}
                    &nbsp;|&nbsp; {post.date} &nbsp;|&nbsp; {post.comments}
                  </div>
                  <h4 className="fw-bold">{post.title}</h4>
                  <p className="text-muted">{post.excerpt}</p>
                  <div className="text-start">
                    <Button
                      variant="danger"
                      size="sm"
                      className="read-more-btn"
                    >
                      READ MORE
                    </Button>
                  </div>
                </div>
              ))}
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

export default NewsSection;
