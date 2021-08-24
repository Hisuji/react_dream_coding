import React from 'react'
import styles from './video_item.module.css'

// const VideoItem = (props) => (
//   <>
//     <li>
//       <img src={props.video.thumbnails.medium.url} alt="video thumbnail" />
//     </li>
//     <div>
//       <p>{props.video.title}</p>
//       <p>{props.video.channelTitle}</p>
//     </div>
//   </>
// )

// props 안에 있는 video를 바로 받아서 사용 -> { }
const VideoItem = ({ videoId, video, onVideoClick, display }) => {
  const displayType = display === 'list' ? styles.list : styles.gird
  return (
    // 이벤트가 발생하면 onVideoClick 함수에 video 전달
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video, videoId)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={video.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{video.title}</p>
          <p className={styles.channel}>{video.channelTitle}</p>
        </div>
      </div>
    </li>
  )
}

export default VideoItem
