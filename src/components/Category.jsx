import React from 'react'
import { Link } from 'react-router'

const Category = () => {
    return (
        <>
            <ul class="list-unstyled category">
                <li>
                    <Link class="d-flex align-items-center justify-content-between" to="/service-details">category
                        <span class="flex-shrink-0">(2)</span></Link>
                </li>
                <li>
                    <Link class="d-flex align-items-center justify-content-between" to="/service-details">Digital Edge
                        Innovations <span class="flex-shrink-0">(8)</span></Link>
                </li>
                <li>
                    <Link class="d-flex align-items-center justify-content-between" to="/service-details">Cyber Guard
                        Technologies <span class="flex-shrink-0">(6)</span></Link>
                </li>
                <li>
                    <Link class="d-flex align-items-center justify-content-between" to="/service-details">Cloud Wave
                        Services <span class="flex-shrink-0">(4)</span></Link>
                </li>
                <li>
                    <Link class="d-flex align-items-center justify-content-between" to="/service-details">Byte Guard
                        Systems <span class="flex-shrink-0">(6)</span></Link>
                </li>
                <li>
                    <Link class="d-flex align-items-center justify-content-between" to="/service-details">Tech Minds
                        Solutions <span class="flex-shrink-0">(4)</span></Link>
                </li>
            </ul>
        </>
    )
}

export default Category