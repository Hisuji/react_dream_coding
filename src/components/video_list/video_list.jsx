import React from 'react'
import VideoItem from '../video_item/video_item'

const VideoList = (props) => (
  <ul>
    {/* {props.b.map((video) => ( // 여기에서는 props의 어떤 값인지가 중요.  */}
    {props.videos.map((video) => (
      <VideoItem key={video.id} video={video.snippet.title} />
    ))}
  </ul>
)

export default VideoList
