import React from 'react'
import VideoItem from '../video_item/video_item'
import styles from './video_list.module.css'

const VideoList = ({ videos, onVideoClick }) => (
  <ul className={styles.video}>
    {/* {props.b.map((video) => ( // 여기에서는 props의 어떤 값인지가 중요.  */}
    {videos.map((video) => (
      <VideoItem
        key={video.id}
        video={video.snippet}
        onVideoClick={onVideoClick}
      />
    ))}
  </ul>
)

export default VideoList
