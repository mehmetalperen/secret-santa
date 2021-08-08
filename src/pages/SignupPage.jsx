import React from 'react'
import Navbar from '../components/Navbar'
import SignupCard from '../components/SignupCard'
import { Container } from 'react-bootstrap'


export default function SignupPage() {
    return (

        <div className="Signup-page">
            <Navbar></Navbar>

            <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth: "400px"}}>
                    <SignupCard></SignupCard>
                </div>
            </Container>


            <style jsx>{`
                .Signup-page {
                    background-color: #FCECEC
                }
                


            `}</style>

            
        </div>
    )
}
