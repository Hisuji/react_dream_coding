import React, { memo, useRef } from 'react'
import styles from './search_header.module.css'
// memo : 전달되는 props가 변경 되지 않으면 re-render되지 않고 props가 변경되면 re-render된다.
const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef()

  const handleSearch = () => {
    const value = inputRef.current.value
    // 콜백함수 : 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출하는 함수
    // handleSearch() 실행되면 onSearch() 실행 : 상위컴포넌트의 함수
    onSearch(value)
  }
  const onClick = () => {
    handleSearch()
  }
  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  )
})

SearchHeader.propTypes = {}

export default SearchHeader
