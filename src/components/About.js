import React from "react";
import { Form, Button } from "react-bootstrap";

const About = () => {
    return (
        <div style={{ marginRight: "40rem", marginTop: "5rem", marginLeft: "5rem", textAlign: "Left" }}>
            <div>
            <h1>About US</h1>
            <ul>
                <li>Our mission</li>
                <li>Our essence</li>
                <li>Our promise</li>
                <li>Our vibe</li>
            </ul>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address: </Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comments: </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group>
                    <Button>soumettre</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default About