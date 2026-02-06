import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Project from '../components/Project';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProjects } from '../actions/projectActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

function HomeScreen() {
  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projectList);
  const { loading, error, projects } = projectList;

  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        < Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {projects && projects.map((project) => (
              <Col key={project._id} sm={12} md={6} lg={4} xl={3} className="mb-3 d-flex align-items-stretch">
                <Product project={project} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </div>
  );
}

export default HomeScreen