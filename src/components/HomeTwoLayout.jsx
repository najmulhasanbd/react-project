import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import HeaderTwo from './HeaderTwo'
const HomeTwoLayout = () => {
    return (
        <>
        <HeaderTwo />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default HomeTwoLayout