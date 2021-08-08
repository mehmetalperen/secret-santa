import React from 'react';
import Btn from './Btn'
import { Link } from "react-router-dom";



export default function StaticDesktopNavbar() {

    return (
        <div className="desktop-navbar">

            <div className="logo-wrapper">
            <Link to="/" style={{ textDecoration: "none" }}>
                <img id="logo-img" src="SecretSanta.svg" alt="logo" />

            </Link>
            </div>

            <div className="action-btn-wrapper">
            <Link className="link-style" to="/login" style={{ textDecoration: "none" }}>
                <Btn id={1} btnColor="#E9EB78" btnHoverColor="#D3D724" btnText="Log In" textColor='black' ></Btn>

            </Link>

            <Link className="link-style" to="/signup" style={{ textDecoration: "none" }}>
                <Btn id={0} btnColor="#2ED699" btnHoverColor="#109364" btnText="Sign Up" textColor='black' ></Btn>
            </Link>
                
                


            </div>


            <style jsx>{`

                .desktop-navbar {
                    position: sticky;
                    top:0;
                    z-index: 100;
                    background-color: white;

                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                }

                .logo-wrapper{

                    width: 25%;
                    display: flex;
                    justify-content: center;
                }
                #logo-img {
                    margin: 2% auto
                }

                .action-btn-wrapper{
                    
                    width: 30%;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                }

                .link-style {
                    justify-content: center;
                    display:flex;
                    width: 100%;
                    
                }
                `}</style>

        </div>

    )
}
