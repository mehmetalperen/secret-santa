import React, {useRef} from 'react'
import {Form, Button, Card} from 'react-bootstrap'



export default function SignupCard() {

    const emailRef = useRef()
    const passwordlRef = useRef()
    const passwordConfirmRef = useRef()



    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordlRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                        </Form.Group>
                        <Button className="w-100 text-center mt-2" type="submit" variant="danger">Sign Up</Button>
                    </Form>
                </Card.Body>

                <div className="w-100 text-center mt-w">Already have an account? Log in</div>
            </Card>
        </>
    )
}
