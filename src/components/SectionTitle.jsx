import React from 'react'

const SectionTitle = ({ title, subtitle, sectionTitleClass, titleClass }) => {
    return (
        <div className={`section-title-block ${sectionTitleClass ? sectionTitleClass : ''}`}>
            <h6 className="section-sub-title position-relative d-inline-block text-uppercase">{subtitle}</h6>
            <h2 className={`section-title right ${titleClass ? titleClass : ''}`}>{title}</h2>
        </div>
    )
}

export default SectionTitle