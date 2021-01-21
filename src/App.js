import React, {useEffect, useState} from 'react'

import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";
import {Component} from "react";
import youtubeApi from "./api/youtubeApi";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import useVideos from "./hooks/useVideos";


const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos('cats')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  return (
    <div className="ui container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        Find Vids!
      </header>
      <SearchBar onTermSubmit={search}/>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">

            <VideoDetail video={selectedVideo}/>
          </div>
          <div className="five wide column">
            <VideoList videos={videos}
                       onVideoSelect={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
//
// <VideosListAnimated videos={videos}
//                     onVideoSelect={setSelectedVideo}
// />
//


export default App;
