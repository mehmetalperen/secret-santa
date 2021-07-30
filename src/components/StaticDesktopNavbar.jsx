import React from 'react';
import NavBtn from './NavBtn'


export default function StaticDesktopNavbar() {

    return (
        <div className="desktop-navbar">

            <div className="logo-wrapper">
                <img id="logo-img" src="SecretSanta.svg" alt="logo" />
            </div>

            <div className="action-btn-wrapper">
            <NavBtn id={0} btnColor="#2ED699" btnHoverColor="#109364" btnText="Sign Up"></NavBtn>
            <NavBtn id={1} btnColor="#E9EB78" btnHoverColor="#D3D724" btnText="Log In"></NavBtn>


            </div>


            <style jsx>{`

                .desktop-navbar {
                    

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
                `}</style>

        </div>

    )
}
