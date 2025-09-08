import React from 'react'
import './Card.css'
const Card = (props) => {
    const searchLibrary = [
    "babbar", "baby", "baba", "bala", "tail", "tata", "tame", "tea", "take", "figure", "figma", "fit",
  ]
  return (
    <>
        <div>
            <ul>
                {
                    props.inputValue ?
                    
                    searchLibrary
                    .filter((val) => 
                        val.startsWith(props.inputValue)
                    )
                    .map(val =>(
                        <li>{val}</li>
                    ))
                    
                    : 
                    <p>No search results available</p>
                }
            </ul>
        </div>
    </>
  )
}

export default Card