import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'
import { HomePage, AboutPage, NotFoundPage } from './pages'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
                <Route path={ROUTES.ABOUTPAGE} element={<AboutPage />} />
            </Routes>
        </Router>
    )
}

export default RootComponent
