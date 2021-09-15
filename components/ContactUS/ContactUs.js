import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {Fragment} from 'react';
import Image from "next/image";
import img from '../../assets/images/img3.png'

const ContactUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Fragment>
      <Row className="m-3 p-5 overflow-hidden">
        <Col className='mt-4 p-4' md={6}>
          <Image src={img} alt="Image"></Image>
        </Col>
        <Col md={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Control
                size="lg"
                className="shadow"
                type="text"
                name="full_name"
                {...register("full_name", { required: true })}
                placeholder="Full Name"
              />
              {errors.full_name && (
                <Form.Text className="text-danger">Name is required</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                size="lg"
                className="shadow"
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Email Address"
              />
              {errors.email && (
                <Form.Text className="text-danger">email is required</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                size="lg"
                className="shadow"
                type="tel"
                name="phone_number"
                {...register("phone_number", { required: true })}
                placeholder="Phone Number"
              />
              {errors.phone_number && (
                <Form.Text className="text-danger">
                  Phone number is required
                </Form.Text>
              )}
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    size="lg"
                    className="shadow"
                    type="tel"
                    name="project_title"
                    {...register("project_title", { required: true })}
                    placeholder="Project Title"
                  />
                  {errors.project_title && (
                    <Form.Text className="text-danger">
                      Project title is required
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Select
                  size="lg"
                  name="service"
                  className="shadow"
                  {...register("service", { required: true })}
                >
                  <option value="">Choose Service</option>
                  <option>Web Development</option>
                  <option>App Development</option>
                </Form.Select>
                {errors.service && (
                  <Form.Text className="text-danger">
                    Service name is required
                  </Form.Text>
                )}
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
              {errors.message && (
                <Form.Text className="text-danger">
                  Message is required
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="file"
                placeholder="Choose File"
                className="shadow"
                rows="5"
                size="lg"
                {...register("file", { required: true })}
                name="file"
              />
              {errors.message && (
                <Form.Text className="text-danger">Choose a file</Form.Text>
              )}
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    size="lg"
                    className="shadow"
                    type="tel"
                    name="budget"
                    {...register("budget", { required: true })}
                    placeholder="Estimated Budget"
                  />
                  {errors.budget && (
                    <Form.Text className="text-danger">
                      Estimated Budget is required
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Select
                  size="lg"
                  name="service"
                  className="shadow"
                  {...register("priority", { required: true })}
                >
                  <option value="">Priority</option>
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                </Form.Select>
                {errors.service && (
                  <Form.Text className="text-danger">
                    Priority is required
                  </Form.Text>
                )}
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    size="lg"
                    className="shadow"
                    type="text"
                    name="country"
                    {...register("country", { required: true })}
                    placeholder="Country"
                  />
                  {errors.budget && (
                    <Form.Text className="text-danger">
                      Country is required
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
            </Row>

            <Button className="brand_button w-100" type="submit">
              Submit Now{" "}
            </Button>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ContactUs;
