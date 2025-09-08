import React from 'react'
import './SearchBox.css'
const SearchBox = (props) => {
  return (
    <>
        <input type="text" placeholder='search here...' onChange={(e)=>props.setInputValue(e.target.value)}/>
    </>
  )
}

export default SearchBox