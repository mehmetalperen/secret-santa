import React from 'react'
import FeatureContainer from './FeatureContainer';

export default function AppFeatureSection() {


    const features = [
        {
            id: 0,
            detail: 'No Confusion Who Got Who',
            img: '../confusion-img.svg'
        },
        {
            id: 1,
            detail: 'Fast Way of Assigning Santas',
            img: '../time-img.svg'
        },
        {
            id: 2,
            detail: 'True Secret Santa',
            img: '../suprise-img.svg'
        }
    ];



    return (
        <div className='app-feature-section-wrapper'>

            {features.map(el => {
                return <FeatureContainer key={el.id} id={el.id} img={el.img} detail={el.detail}/>
            })}




            <style jsx>{`

                .app-feature-section-wrapper {
                    box-sizing: border-box;
                    width: 100%;
                    min-height: 75vh;
                    align-items: center;
                    display: flex;
                    flex-wrap: wrap	;
                    justify-content: center;
                    background-color: #D00000;
                    border-style: solid;
                    border-color: red;
                    border-width: 2px;
                    
                }


                
                `}</style>
            
        </div>
    )
}
