import React from 'react'
import { useEffect, useState } from 'react'
import SearchHeader from './components/search_header/search_header'
import VideoList from './components/video_list/video_list'
import styles from './app.module.css'
import VideoDetail from './components/video_detail/video_detail'

function App({ youtube }) {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  const selectVideo = (video) => {
    setSelectedVideo(video) // state 값 설정
  }

  const search = (query) => {
    youtube
      .search(query) //
      .then((items) => setVideos(items))
  }

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((items) => setVideos(items))
  }, [])

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      {/* selectedVideo 값이 있으면 VideoDetail 노출 */}
      {selectedVideo && <VideoDetail video={selectedVideo} />}
      <VideoList key={videos.id} videos={videos} onVideoClick={selectVideo} />
    </div>
  )
}

export default App
