import React from 'react'
import { useEffect, useState } from 'react'
import SearchHeader from './components/search_header/search_header'
import VideoList from './components/video_list/video_list'
import styles from './app.module.css'

function App() {
  //  1. App 컴포넌트가 마운트될 때 비디오 목록 받아오기]
  //  2. 여기서 변화하는 것은? 비디오 목록 즉, 비디오 목록을 state로 관리
  //  3. 해당 컴포넌트에서 state에서 비디오 목록을 사용하기 위해  useState를 사용한다.
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY

  // state 선언 위치 ? (연관된 컴포넌트 중) 최상위 컴포넌트
  // 리액트는 특정 state가 변경되면 해당 컴포넌트와 그 하위의 컴포넌트 모두 리렌더링됨
  const [videos, setVideos] = useState([])
  const search = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&type=video&q=${query}&key=${apiKey}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        // result에 있는 items를 빙글빙글 돌면서 아이템을 그대로 하나하나씩 복사하는데 id는 특정 값으로 덮어씌운다.
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log('error', error))
  }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${apiKey}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items)) // 받아온 정보를 하위 컴포넌트 VideoList로 넘겨준다.
      .catch((error) => console.log('error', error))
  }, [])

  // return <VideoList a={videos.id} b={videos} /> 여기서는 결국 어떤 이름(a, b)으로 넘겨주던지 상관이 없다.
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList key={videos.id} videos={videos} />
    </div>
  )
}

export default App
