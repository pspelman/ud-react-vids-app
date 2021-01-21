import React, {Component} from 'react'
import {VideoCard} from "./VideoCard"
import "./VideoCard.css"
import {CSSTransition, TransitionGroup} from "react-transition-group";

// const watchStub = `https://youtube.com/watch?v=`
const VideoList = (({videos, onVideoSelect}) => {

  return (
    <TransitionGroup>
      {videos.map((video) => {
        return (
          <CSSTransition
            key={video.etag}
            timeout={500}
            classNames={"video"}
          >
            <VideoCard
              video={video}
              onVideoSelect={onVideoSelect}
            />
          </CSSTransition>
        )
      })
      }
    </TransitionGroup>
  )
})
// class VideoList extends Component {
//   render() {
//
//     const videoUrls = this.props.videos.map((video) => {
//       return <VideoCard key={video.etag}  video={video} />
//     })
//
//     return (
//       <div>
//         {videoUrls}
//       </div>
//     )
//   }
// }


export default VideoList