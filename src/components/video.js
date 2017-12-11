import React from 'react'
const BASE_URL="https://www.youtube.com/embed/";

const Video = function({videoId}){
    return(
        <div className='iframeDiv'>
            <iframe src={`${BASE_URL}${videoId}`}/>
        </div>
    )

}

export default Video;