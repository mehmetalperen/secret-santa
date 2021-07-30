

export default function NavBtn(props) {

    
    return (
        <div>

           <button id={`nav-btn-${props.id}`}>{props.btnText}</button>


            <style jsx>{`

                ${`#nav-btn-${props.id}`} {
                    background-color: ${props.btnColor};
                    border-style: solid;
                    border-width: 0px;
                    font-size: 16px;
                    min-width: 100px;
                    border-radius: 25px;
                    min-height: 30px;

                }
                ${`#nav-btn-${props.id}:hover`} {
                    background-color: ${props.btnHoverColor};
                    cursor: pointer
                    
                }

                

                `}</style>

        </div>

    )
}
