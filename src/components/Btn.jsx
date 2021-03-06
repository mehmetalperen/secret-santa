

export default function Btn(props) {

    
    
    return (

           <button id={`nav-btn-${props.id}`}>{props.btnText}


                <style jsx>{`


                ${`#nav-btn-${props.id}`} {
                    background-color: ${props.btnColor};
                    border-style: solid;
                    border-width: 0.5px;
                    border-color: ${props.borderColor === undefined? props.btnColor: props.borderColor}; 
                    {/* ^^^^above means^^^^ if the borderColor is null, then set border-color as btnColor. This is usefel for cases where the btn has a different border color than the btn body. this only once happens in the website, thou */}
                    font-size: 16px;
                    width: 80%;
                    border-radius: 25px;
                    min-height: 30px;
                    color: ${props.textColor};
                    margin: 10px auto;
                    
                    

                }
                ${`#nav-btn-${props.id}:hover`} {
                    background-color: ${props.btnHoverColor};
                    cursor: pointer
                    
                }

                @media only screen and (max-width: 900px) {

                    ${`#nav-btn-${props.id}`} {
                        width: 90%;


                    }

                }



                `}</style>
                        
           
           </button>


          


    )
}
