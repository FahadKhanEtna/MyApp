import React from 'react'
import {Link} from "react-router"

const AvisList = (props) => {
    const {video} = props
    return(
        <li className='avisLIst'>
            <p>{video.description}</p>
            <p>{video.author}</p>
            <button onClick={() => deleteVideo(video)}>Supprimer</button>
        </li>
    )

    function deleteVideo(video) {
        props.deleteVideoCallBack(video)
    }
}

export default AvisList