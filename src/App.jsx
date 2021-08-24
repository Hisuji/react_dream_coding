import React, { useCallback } from 'react'
import { useEffect, useState } from 'react'
import SearchHeader from './components/search_header/search_header'
import VideoList from './components/video_list/video_list'
import styles from './app.module.css'
import VideoDetail from './components/video_detail/video_detail'

// App 컴포넌트는 function 컴포넌트이므로 state나 props가 바뀌면 정의한 멤버 변수가 다시 생성된다.
function App({ youtube }) {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videoId, setVideoId] = useState('')

  const selectVideo = (video, id) => {
    setSelectedVideo(video) // state 값 설정
    setVideoId(id)
  }

  // memo를 사용 하였지만 SearchHeader가 re-render 되는 이유는 App 컴포넌트가 function 컴포넌트이기 때문이다.
  // 따라서, useCallback 사용 : [] 한 번만 생성, [youtube] youtube가 변경될 때 마다 업데이트
  // useCallback은 한 번 생성하면 메모리에 계속 보관된다. 주의 필요
  const search = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((items) => setVideos(items))
    },
    [youtube]
  )

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((items) => setVideos(items))
  }, [youtube])

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {/* selectedVideo 값이 있으면 VideoDetail 노출 */}
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} videoId={videoId} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            key={videos.id}
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  )
}

export default App
