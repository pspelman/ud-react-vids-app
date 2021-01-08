import React from 'react'

// video stub: `https://youtube.com/watch?v=${watchId}`
export function VideoCard(props) {
  const video = props.video
  const {videoId} = props.video.id
  const {snippet} = props.video
  const {title, description, thumbnails} = snippet
  console.log(`snippet: `, snippet)

  return (
    <div className={"video-item"} onClick={() => props.onVideoSelect(video)}>
        <img src={thumbnails.medium.url}
             alt={description}
             className={"ui image"}
        />
        {title}
    </div>
  )
}

// <img src={snippet.thumbnails.medium.url} alt=""/>
