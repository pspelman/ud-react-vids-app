import React from 'react'

const VideoDetail = ({video}) => {

  const title = video ? video.snippet.title : ''
  const description = video ? video.snippet.description : ''
  const videoId = video ? video.id.videoId : null
  const videoSrc=`https://www.youtube.com/embed/${videoId}`
  return (
    <div>
      {video &&
      <div className="ui segment">
        <iframe src={videoSrc} frameBorder="0"></iframe>
        <h4>
          {title}
        </h4>
        {description}
        <br/>
      </div>
      }
    </div>
  );
}

// <iframe width="560" height="315"
//         src={`https://www.youtube.com/embed/${videoId}`}
//         frameBorder="0"
//         title={videoId}
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen></iframe>


export default VideoDetail