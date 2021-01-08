import {useState, useEffect} from 'react'
import youtubeApi from "../api/youtubeApi";

const useVideos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    onTermSubmit('cats')
  }, [])
}

export default useVideos
