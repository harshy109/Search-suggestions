
import './App.css'
import Card from './component/Card'
import SearchBox from './component/SearchBox'
import {useState} from 'react'

function App() {
  const [inputValue , setInputValue] = useState('');

  

  return (
    <>
      <SearchBox inputValue={inputValue} setInputValue={setInputValue}></SearchBox>
      <Card inputValue={inputValue}></Card>
    </>
  )
}

export default App
