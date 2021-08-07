

export default function Btn(props) {

    
    return (
        <div>

           <button id={`nav-btn-${props.id}`}>{props.btnText}</button>


            <style jsx>{`

                ${`#nav-btn-${props.id}`} {
                    background-color: ${props.btnColor};
                    border-style: solid;
                    border-width: 0.5px;
                    border-color: ${props.borderColor};
                    font-size: 16px;
                    min-width: 100px;
                    width: 40%;
                    border-radius: 25px;
                    min-height: 30px;
                    color: ${props.textColor}
                    
                    

                }
                ${`#nav-btn-${props.id}:hover`} {
                    background-color: ${props.btnHoverColor};
                    cursor: pointer
                    
                }

                

                `}</style>

        </div>

    )
}
