import React from 'react'
import Navbar from '../components/Navbar'
import IntroSection from '../components/IntoSection'
import AppFeatureSection from '../components/AppFeatureSection'

export default function Homepage() {
    return (

        <div >
            <Navbar></Navbar>
            <IntroSection></IntroSection>
            <AppFeatureSection/>
        </div>
    )
}
