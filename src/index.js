import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Youtube from './service/youtube'

const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY
const youtube = new Youtube(apiKey) // index.js가 호출 될 때 1번만 생성된다.
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
)
