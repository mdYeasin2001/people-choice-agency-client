import React from "react";
import { Card, Col, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import SectionTitleUnderline from "../../common/SectionTitleUnderline";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Card className="p-4 shadow border-0 contact__from__card">
      <h2 className="display-6 fw-bold text-primary">Get In Touch</h2>
      <div className="pb-4">
        <SectionTitleUnderline />
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Control size="lg" className="shadow" type="text" name="full_name" {...register("full_name", { required: true })} placeholder="Full Name" />
          {errors.full_name &&
            <Form.Text className="text-danger">
              Name is required
            </Form.Text>
          }
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control size="lg" className="shadow" type="email" name="email" {...register("email", { required: true })} placeholder="Email Address" />
          {errors.email &&
            <Form.Text className="text-danger">
              email is required
            </Form.Text>
          }
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control size="lg" className="shadow" type="tel" name="phone_number" {...register("phone_number", { required: true })} placeholder="Phone Number" />
          {errors.phone_number &&
            <Form.Text className="text-danger">
              Phone number is required
            </Form.Text>
          }
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control size="lg" className="shadow" type="tel" name="project_title" {...register("project_title", { required: true })} placeholder="Project Title" />
              {errors.project_title &&
                <Form.Text className="text-danger">
                  Project title is required
                </Form.Text>
              }
            </Form.Group>
          </Col>
          <Col>
            <Form.Select size="lg" name="service" className="shadow" {...register("service", { required: true })}>
              <option value="">Choose Service</option>
              <option>Web Development</option>
              <option>App Development</option>
            </Form.Select>
            {errors.service &&
              <Form.Text className="text-danger">
                Service name is required
              </Form.Text>
            }
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Message"
            className="shadow"
            rows="5"
            size="lg"
            {...register("message", { required: true })}
            name="message"
          />
          {errors.message &&
            <Form.Text className="text-danger">
              Message is required
            </Form.Text>
          }
        </Form.Group>

        <Button className="brand_button w-100" type="submit">Submit Now </Button>
      </Form>
    </Card>
  );
};

export default ContactForm;
