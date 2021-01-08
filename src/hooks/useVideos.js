import {useState, useEffect} from 'react'
import youtubeApi from "../api/youtubeApi";
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm)
  }, [])

  const search = async term => {
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
  }
  return [videos, search]
}

export default useVideos
