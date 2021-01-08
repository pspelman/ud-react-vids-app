import React, {useEffect, useState} from 'react'

import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";
import {Component} from "react";
import youtubeApi from "./api/youtubeApi";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

const App = () => {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      onTermSubmit('cats')  // default search
    }, 1000)
  }, [])

  const onTermSubmit = async term => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: YOUTUBE_API_KEY
      }
    });
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        Find Vids!
      </header>
      <SearchBar onTermSubmit={onTermSubmit}/>
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

export default App;
