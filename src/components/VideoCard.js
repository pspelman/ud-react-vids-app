import React from 'react'

// video stub: `https://youtube.com/watch?v=${watchId}`
export function VideoCard(props) {
  const {videoId} = props.video.id

  return (
    <div>
      <iframe width="560" height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              title={videoId}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
    </div>
  )
}