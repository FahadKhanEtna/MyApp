import {AT_VIDEOS} from "../actions/action-types"

export default function ReducerVideos (state=[],action){
    switch(action.type) {
        case AT_VIDEOS.READ_ALL:
        return action.payload;
        case AT_VIDEOS.DELETE:
            return state.filter((video) => {
                if(video.id == action.payload){
                    return false
                }else{
                    return true
                }
            })
        case AT_VIDEOS.CREATE:
            return [...state,action.payload]
    }
    return state;
}