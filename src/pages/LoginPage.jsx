import React from 'react'
import Navbar from '../components/Navbar'
import { Container } from 'react-bootstrap'
import LoginCard from '../components/LoginCard'


export default function LoginPage() {
    return (

        <div className="Login-page">
            <Navbar></Navbar>


            <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth: "400px"}}>
                    <LoginCard></LoginCard>
                </div>
            </Container>


            <style jsx>{`
                .Login-page {
                    background-color: #FCECEC
                }
                


            `}</style>

            
        </div>
    )
}
