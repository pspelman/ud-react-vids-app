import React, {Component} from 'react';
import {VideoCard} from "./VideoCard";

// const watchStub = `https://youtube.com/watch?v=`
class VideoList extends Component {
  render() {

    const videoUrls = this.props.videos.map((video) => {
      return <VideoCard key={video.etag}  video={video} />
    })

    return (
      <div>
        {videoUrls}
      </div>
    );
  }
}


export default VideoList;
