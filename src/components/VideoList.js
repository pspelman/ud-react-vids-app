import React, {Component} from 'react'
import {VideoCard} from "./VideoCard"
import "./VideoCard.css"

// const watchStub = `https://youtube.com/watch?v=`
const VideoList = (({videos, onVideoSelect}) => {
  return (
    videos.map((video) => {
      return <VideoCard key={video.etag}
                        video={video}
                        onVideoSelect={onVideoSelect}
      />
    })
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