import React from 'react'
import { Link } from 'react-router'

const Category = () => {
    return (
        <>
            <ul className="list-unstyled category">
                <li>
                    <Link className="d-flex align-items-center justify-content-between" to="/service-details">category
                        <span className="flex-shrink-0">(2)</span></Link>
                </li>
                <li>
                    <Link className="d-flex align-items-center justify-content-between" to="/service-details">Digital Edge
                        Innovations <span className="flex-shrink-0">(8)</span></Link>
                </li>
                <li>
                    <Link className="d-flex align-items-center justify-content-between" to="/service-details">Cyber Guard
                        Technologies <span className="flex-shrink-0">(6)</span></Link>
                </li>
                <li>
                    <Link className="d-flex align-items-center justify-content-between" to="/service-details">Cloud Wave
                        Services <span className="flex-shrink-0">(4)</span></Link>
                </li>
                <li>
                    <Link className="d-flex align-items-center justify-content-between" to="/service-details">Byte Guard
                        Systems <span className="flex-shrink-0">(6)</span></Link>
                </li>
                <li>
                    <Link className="d-flex align-items-center justify-content-between" to="/service-details">Tech Minds
                        Solutions <span className="flex-shrink-0">(4)</span></Link>
                </li>
            </ul>
        </>
    )
}

export default Category