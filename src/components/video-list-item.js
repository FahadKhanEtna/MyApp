import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

const VideoListItem = function (props) {
    const {movie} =props;
    return  <li onClick={handleOnClick}>
                <div >
                    <div >
                        <img className='imageList' src={`${IMAGE_BASE_URL}${movie.poster_path}`}/>
                    </div>
                    <div>
                        <h2>{movie.title}</h2>
                    </div>  
                </div>        
            </li>

            function handleOnClick() {
                props.callback(movie);
            }
}

export default VideoListItem;