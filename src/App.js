import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";
import {Component} from "react";
import youtubeApi from "./api/youtubeApi";
import VideoList from "./components/VideoList";

const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

class App extends Component {
  state = {vids: []}

  onTermSubmit = async term => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: YOUTUBE_API_KEY
      }
    });
    const videos = response.data.items
    console.log(`Videos response: `, videos)

    this.setState({vids: videos})

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          Find Vids!
        </header>
        <SearchBar onTermSubmit={this.onTermSubmit}/>
        <VideoList videos={this.state.vids}/>
      </div>
    );
  }
}

export default App;
