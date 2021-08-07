import React from 'react'
import Btn from './Btn'

export default function CallActionSection() {
    return (
        <div className="call-action-wrapper">

            <div className="call-action-content">
                <h3 className="call-action-title">
                    Create your first Secret Santa event now!
                </h3>

                <div className="btn-container">
                    <Btn id={5} btnColor="#D00000" btnHoverColor="#FF6584" btnText="Sign Up" textColor="white" ></Btn>
                    <Btn id={6} btnColor="#FFFFFF" btnHoverColor="#FF6584" btnText="Log In" textColor="black" borderColor="#D00000" ></Btn>

                </div>
            </div>
        
        


            <style jsx>{`

                .call-action-wrapper {
                    box-sizing: border-box;
                    width: 100%;
                    min-height: 50vh;
                    align-items: center;
                    display: flex;
                    flex-wrap: wrap	;
                    justify-content: center;
          
                    
                }

                .call-action-content {
                    width: 55%;


                }
                .call-action-title {
                    text-align: center;
                    font-family: Quicksand;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 30px;
                    line-height: 37px;
                }

                .btn-container {
                    display: flex;
                    flex-wrap: wrap;
                }



                
                `}</style>
            
        </div>
    )
}
