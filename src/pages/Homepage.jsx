import React from 'react'
import Navbar from '../components/Navbar'
import IntroSection from '../components/IntoSection'
import AppFeatureSection from '../components/AppFeatureSection'
import CallActionSection from '../components/CallActionSection'

export default function Homepage() {
    return (

        <div >
            <Navbar></Navbar>
            <IntroSection></IntroSection>
            <AppFeatureSection/>
            <CallActionSection />
        </div>
    )
}
