import React from 'react'

export default function FeatureContainer(props) {
    return (
        <div className="feature-container">
            <img className="feature-img" src={props.img} alt="feature-img" />
            <h3 className="feature-detail">{props.detail}</h3>

                <style jsx>{`



                    .feature-container {
                        margin: 5% auto;
                        min-width: 300px;
                    }
                    .feature-img {
                        max-width: 100%;
                    }
                    .feature-detail {
                        text-align: center;
                        font-family: Lato;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 25px;
                        line-height: 30px;
                        color: white;
                    }


                `}</style>

    </div>
    )
}
