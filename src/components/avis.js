import React, {Component} from 'react'
import AvisList from './avis-list'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {readAllVideo, deleteVideo} from "../actions/index"
import {Link} from "react-router"
import Title from '../jss/title'

class Avis extends Component {

    componentWillMount(){
        this.props.readAllVideo()
    }

    renderVideos(){
        const{videos} = this.props
        if(videos){
            return videos.map((video) => {
            return <AvisList key={video.id} video={video} deleteVideoCallBack={(video) =>this.deleteVideoCallBack(video)}/>
            })
        }
    }

    deleteVideoCallBack(video){
        this.props.deleteVideo(video.id)
    }

    render() {
        return (
            <div>
                <Title>Vos avis</Title>
                <ul>
                    {this.renderVideos()}
                </ul>
            </div>
            )
    }
    
}

const mapStateToProps = (state) => {
    return {
        videos: state.videos
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({readAllVideo,deleteVideo}, dispatch),
  })


export default connect(mapStateToProps,mapDispatchToProps)(Avis)