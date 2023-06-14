import React from 'react'
import Navbar from '../components/Navbar'

const AboutPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1 style={{ fontSize: '4em' }}>About Page!</h1>
            </div>
        </>
    )
}

export default AboutPage
