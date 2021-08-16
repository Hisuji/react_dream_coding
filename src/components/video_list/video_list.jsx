import React from 'react'
import VideoItem from '../video_item/video_item'
import styles from './video_list.module.css'

const VideoList = (props) => (
  <ul className={styles.video}>
    {/* {props.b.map((video) => ( // 여기에서는 props의 어떤 값인지가 중요.  */}
    {props.videos.map((video) => (
      <VideoItem key={video.id} video={video.snippet} />
    ))}
  </ul>
)

export default VideoList
