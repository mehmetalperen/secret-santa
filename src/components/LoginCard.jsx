import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import { Link, useHistory} from "react-router-dom";




export default function LoginCard() {

    const emailRef = useRef()
    const passwordlRef = useRef()
    const { login, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory();



    async function handleSubmit ( event ) {
        event.preventDefault();


        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordlRef.current.value)
            history.push(`/further_action_page/${currentUser.uid}`)

        } catch {
            setError('Failled to log in')
        }
        setLoading(false)
    }



    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordlRef} required></Form.Control>
                        </Form.Group>
      
                        <Button disabled={loading} className="w-100 text-center mt-2" type="submit" variant="danger">Log In</Button>
                    </Form>
                </Card.Body>

                <div className="w-100 text-center mt-w">Need an account? <Link to="/signup">Sign Up</Link></div>
            </Card>
        </>
    )
}
