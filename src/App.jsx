import React from 'react'
import { useEffect, useState } from 'react'
import VideoList from './components/video_list/video_list'

function App() {
  //  1. App 컴포넌트가 마운트될 때 비디오 목록 받아오기]
  //  2. 여기서 변화하는 것은? 비디오 목록 즉, 비디오 목록을 state로 관리
  //  3. 해당 컴포넌트에서 state에서 비디오 목록을 사용하기 위해  useState를 사용한다.
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY

  const [videos, setVideos] = useState([])

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=' +
        apiKey,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items)) // 받아온 정보를 하위 컴포넌트 VideoList로 넘겨준다.
      .catch((error) => console.log('error', error))
  }, [])

  // return <VideoList a={videos.id} b={videos} /> 여기서는 결국 어떤 이름(a, b)으로 넘겨주던지 상관이 없다.
  return <VideoList key={videos.id} videos={videos} />
}

export default App
