import React from "react";
import { Col, Row } from "react-bootstrap";
import BlogCard from "./blog-card";
import { fakeBlogsData } from "./fake-blog";

const Blogs = () => {
  // console.log({ fakeBlogsData });
  return (
    <section className="bg-danger">
      <Row>
        {fakeBlogsData.map((blog) => (
          <BlogCard blog={blog} key={Math.random()} />
        ))}
      </Row>
    </section>
  );
};

export default Blogs;
