import React from 'react'
import Navbar from '../components/Navbar'
import Btn from '../components/Btn'
import { Link } from "react-router-dom";




export default function FurtherActionPage() {
    return (

        <div className="FurtherActionPage">
            <Navbar></Navbar>

            <div className="further-action-page-container">

                <div className="action-event-container">
                    <img src="../join-santa-event-img.svg" alt="" className="action-img" />
                    <div className="btn-container">
                        <Link className="link-style" to="/create_event_page" style={{ textDecoration: "none" }}>
                            <Btn id={7} btnColor="#D00000" btnHoverColor="#FF6584" btnText="Join Event" textColor="white" ></Btn>
                        </Link>


                    </div>
                </div>
                <div className="action-event-container">
                    <img src="../create-santa-event-img.svg" alt="" className="action-img" />
                    <div className="btn-container">
                        <Link className="link-style" to="/join_event_page" style={{ textDecoration: "none" }}>
                                <Btn id={8} btnColor="#FFFFFF" btnHoverColor="#FF6584" btnText="Create Event" textColor="black" borderColor="#D00000" ></Btn>
                        </Link>
                    </div>
                </div>

            </div>




            <style jsx>{`
                .FurtherActionPage {
                    background-color: #FCECEC
                }

                .further-action-page-container {

                    width: 100%;
                    min-height: 100vh;
                    align-items: center;
                    display: flex;
                    flex-wrap: wrap	;
                    justify-content: space-evenly;
                }


                .action-event-container {
                    flex-wrap: nowrap;
                    justify-content: center;

                    border-style: solid;
                    border-color: black;
                    border-width: 2px;

                }

                .action-img {
                    min-width: 100%;
                }

                .btn-container {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
                
                @media only screen and (max-width: 900px) {
                    {/* breaking point is 900px */}

                    .further-action-page-container {
                        max-width: 100%;
                    }

                    .action-event-container  {
                        width: 100%;

                    }

                    .action-img{
                        width: 100%;        

                    }
                }
            `}</style>

            
        </div>
    )
}
