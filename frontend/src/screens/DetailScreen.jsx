import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Form, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';
import projects from '../project'

function DetailScreen() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [project, setProject] = useState({});

    useEffect(() => {
        async function fetchProduct() {
            const { data } = await axios.get(`/api/v1/projects/${id}/`);
            setProject(data);
        }
        fetchProduct();
    }, [id]);

    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>
                Go Back
            </Link>

            <Row>
                <Col md={4}>
                    <Image src={project.image} alt={project.name} fluid />
                </Col>

                <Col md={4}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{project.name}</h3>
                        </ListGroup.Item>
                        <ListGroupItem>
                            Description: {project.description}
                        </ListGroupItem>
                        <ListGroupItem>
                            Status: {project.status}
                        </ListGroupItem>
                        <ListGroupItem>
                            Hours Consumed: {project.hours_consumed}
                        </ListGroupItem>
                        <ListGroupItem>
                            Start Date: {project.start_date}
                        </ListGroupItem>
                        <ListGroupItem>
                            End Date: {project.end_date}
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>{task.name}</h2>
                            </ListGroup.Item>
                            <ListGroupItem>
                                Description: {task.description}
                            </ListGroupItem>
                            <ListGroupItem>
                                Status: {task.status}
                            </ListGroupItem>
                            <ListGroupItem>
                                Hours Consumed: {project.hours_consumed}
                            </ListGroupItem>
                            <ListGroupItem>
                                Start Date: {project.start_date}
                            </ListGroupItem>
                            <ListGroupItem>
                                End Date: {project.end_date}
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen