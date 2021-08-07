import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PortraitIcon from '@material-ui/icons/Portrait';
export default function Footer() {


    
    return (
        <div className="footer-wrapper">
            <div className="copy-right-container">
                <p className="copy-right">
                ©SecretSanta {new Date().getFullYear()}
                </p>
                <p className="copy-right">
                ALL RIGHTS RESEVERED

                </p>

            </div>

            <div className="contact-container">

                <a className="icon" href="mailto:mhmtalperennadi@gmail.com" >
                    <MailOutlineIcon/>
                </a>
                
                <a href="https://github.com/mehmetalperen" className="icon" target="_blank">
                    <GitHubIcon/>
                </a>

                <a href="https://www.linkedin.com/in/mehmet-nadi-03372a1b1" className="icon" target="_blank">
                    <LinkedInIcon/>
                </a>

                <a href="https://flamboyant-dubinsky-730d49.netlify.app/" className="icon" target="_blank">
                    <PortraitIcon/>
                </a>
            </div>
            
                <style jsx>{`

                    .footer-wrapper {
                        display: flex;
                        flex-wrap: wrap;
                        width: 100%;
                        justify-content: space-between;
                        min-height: 10vh;
                        background: rgba(222, 68, 68, 0.1);

                    }

                    .copy-right-container {
                        margin: 0 10%;
                    }

                    .contact-container {
                        margin: 0 10%;
                        min-width: 20%;
                        justify-content: space-evenly;
                        display: flex;
                        align-items: center;

                    }

                    .copy-right {
                        font-family: Lato;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 17px;
                    }
                    a {
                        text-decoration: none;
                        color: black;
                    }
                    

                    .icon:hover {
                        color:#D00000;
                        cursor: pointer;
                    }

                @media only screen and (max-width: 900px) {

                    .footer-wrapper{
                        min-height: 30vh;
                    }

                    .copy-right-container{
                        width: 90%;
                        justify-content: center;
                        text-align: center;
                        margin: 10% auto;
                    }

                    .contact-container{
                        width: 90%;
                        text-align: center;
                        margin: 10% auto;
                    }
                    

                }
            `}</style>

        </div>
    )
}
