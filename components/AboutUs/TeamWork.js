import React from 'react';
import ReactPlayer from "react-player";
import SectionTitleUnderline from '../common/SectionTitleUnderline';
import { Card, Col, Form, Row, Button } from "react-bootstrap";

const TeamWork = () => {
    return (
      <section className="m-5">
        <Row>
          <Col md={6}>
            <h1 className="text-primary">Watch Us How Our Team Work Togather</h1>
            <SectionTitleUnderline />
            <p>
              Praesent fermentum nisl at ipsum facilisis viverra. Ut elementum
              accumsan finibus. Cras placerat lacinia mi, ac dictum ante. Donec
              libero enim, tincidunt sit amet venenatis id, maximus eu quam.
            </p>
            <ul className='fw-bold'>
              <li>Suspendisse ullamcorper mollis orci in facilisis.</li>
              <li>Etiam orci magna, accumsan varius enim volutpat.</li>
              <li>Etiam orci magna, accumsan varius enim volutpat.</li>
            </ul>
          </Col>
          <Col md={6}>
            <ReactPlayer url="https://www.youtube.com/watch?v=ug50zmP9I7s" />
          </Col>
        </Row>
      </section>
    );
};

export default TeamWork;