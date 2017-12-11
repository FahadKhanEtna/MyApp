import axios from 'axios'
import {AT_VIDEOS} from './action-types'
const END_POINT = "http://localhost:3000"

export function readAllVideo() {
    return function (dispatch){
        axios.get(`${END_POINT}/videos`).then((response) => {
            dispatch({type: AT_VIDEOS.READ_ALL, payload: response.data})
        })
    }
}
export function deleteVideo(id) {
    return function (dispatch){
        axios.delete(`${END_POINT}/videos/${id}`).then((response) => {
            dispatch({type: AT_VIDEOS.DELETE, payload: id})
        })
    }
}

export function createVideo(video) {
    return function (dispatch){
        axios.post(`${END_POINT}/videos/`,
    {
        description: video.description,
        author: video.author
    }).then((response) => {
            dispatch({type: AT_VIDEOS.CREATE, payload: response.data})
        })
    }
}