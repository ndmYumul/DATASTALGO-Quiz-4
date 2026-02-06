import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Project() {
  return (
    <Card className="my-3 p-3 rounded h-100 w-100">
        <Link to={`/project/${project._id}`}>
            <Card.Img src={project.image} variant="top" className="card-img-fixed" />
         </Link>

        <Card.Body className='d-flex flex-column'>
            <Link to={`/project/${project._id}`}>
                <Card.Title as="div">
                    <strong>{project.name}</strong>
                </Card.Title>
            </Link>

        </Card.Body>

    </Card>
  )
}

export default Project
