import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: "Welcome to Kiki's Shop",
    description: "Trumpeter and chess master",
    keywords: 'music, jazz, street'
}

export default Meta
