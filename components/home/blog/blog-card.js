import Image from "next/image";
import { Card, CardGroup, Col } from "react-bootstrap";

const BlogCard = ({ blog }) => {
  //   console.log({ blog });
  const {
    image,
    date,
    writer,
    title,
    facebookLink,
    instagramLink,
    twitterLink,
  } = blog;
  return (
    <Col md={6} sm={12} xs={12} className="centerItem text-white">
      <CardGroup>
        <Card>
          {/* <Card.Img variant="top">
            <Image src={image} alt="blog" height={200} width={200} />
          </Card.Img> */}
          <Image src={image} alt="blog" height={200} width={200} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </Col>
  );
};

export default BlogCard;
