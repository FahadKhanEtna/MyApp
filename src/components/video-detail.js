import React from 'react'
import Title from '../jss/title'
import Para from '../jss/description'

const VideoDetail = function({title, description}) {
    return (
    <div>
        <Title>{title}</Title>
        <Para>{description}</Para>
    </div>
    )
}

export default VideoDetail;