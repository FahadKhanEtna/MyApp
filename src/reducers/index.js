import {combineReducers} from 'redux'
import ReducerVideos from "./reducer-videos"
import {reducer as ReducerForm} from 'redux-form'

const rootReducer = combineReducers({
    videos : ReducerVideos,
    form : ReducerForm
});

export default rootReducer