import React from 'react'
import Btn from './Btn'

export default function IntoSection() {
    return (
        <div className='Intro-section-wrapper'>

            <div className="content-container">
                <h1 className='intro-title'>Create a Secret Santa</h1>
                <p className="intro-sentence">Match Santas randomly. Noday knows who got who!</p>
                <div className="into-action-btn-container">
                    <Btn id={3} btnColor="#D00000" btnHoverColor="#FF6584" btnText="Sign Up" textColor="white" ></Btn>
                    <Btn id={4} btnColor="#FFFFFF" btnHoverColor="#FF6584" btnText="Sign Up" textColor="black" borderColor="#D00000" ></Btn>

                </div>
            </div>


            <div className="img-container">
                <img id="home-page-img" src="../Santa.svg" alt="" />
            </div>






            <style jsx>{`

                .Intro-section-wrapper {
                    border-style: solid;
                    border-width: 2px;
                    border-color: red;
                    box-sizing: border-box;
                    
                    width: 100%;
                    min-height: 100vh;
                    align-items: center;
                    display: flex;
                    flex-wrap: wrap-reverse	;
                    justify-content: center;
                    
                }

                .content-container {
                    border-style: solid;
                    border-width: 2px;
                    border-color: blue;
                    width: 40%;
                    margin: 0 auto;
                    
                }
                .intro-title {
                    font-family: Lato;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 60px;
                    line-height: 72px;
                    /* identical to box height */


                    color: #D00000;
                }

                .intro-sentence {
                    font-family: Quicksand;
                    font-style: normal;
                    font-weight: 500px;
                    font-size: 30px;
                    line-height: 37px;
                }
                .into-action-btn-container {
                    display: flex;
                    justify-content: space-evenly;
                    
                    border-style: solid;
                    border-width: 2px;
                    border-color: blue;
                }

                .img-container{
                    border-style: solid;
                    border-width: 2px;
                    border-color: pink;
                    width: 50%;
                    margin: 0 auto;
                
                }
                #home-page-img{
                    max-width: 100%;
                }


                @media only screen and (max-width: 900px) {
                    {/* breaking point is 900px */}

                    .Intro-section-wrapper {
                        max-width: 100%;
                    }

                    .content-container  {
                        width: 100%;

                    }

                    .img-container{
                        width: 100%;        

                    }
                    
                    .intro-title {
                        
                    font-size: 40px;

                    color: #D00000;
                }
                .intro-sentence {
                    font-size: 20px;
                }
                .into-action-btn-container{
                    flex-wrap: wrap;
                }


                }

                
                `}</style>
            
        </div>
    )
}
