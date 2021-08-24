import React from 'react'
import VideoItem from '../video_item/video_item'
import styles from './video_list.module.css'

const VideoList = ({ videos, onVideoClick, display }) => (
  <ul className={styles.video}>
    {/* {props.b.map((video) => ( // 여기에서는 props의 어떤 값인지가 중요.  */}
    {videos.map((video) => (
      <VideoItem
        key={video.id} // ref와 key는 props로 다른 컴포넌트에 전달되지 않는다.
        videoId={video.id}
        video={video.snippet}
        onVideoClick={onVideoClick}
        display={display}
      />
    ))}
  </ul>
)

export default VideoList
