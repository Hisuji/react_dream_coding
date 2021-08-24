import React from 'react'
import styles from './video_detail.module.css'

// 코드가 없어서 바로 return 되게 하려면 ( ) 사용, 코드가 있다면 { } 사용
const VideoDetail = ({ video, videoId }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.video}
      title="youtube video player"
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <h2>{video.title}</h2>
    <h3>{video.channelTitle}</h3>
    <pre className={styles.description}>{video.description}</pre>
  </section>
)

export default VideoDetail
