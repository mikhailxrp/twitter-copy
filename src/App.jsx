import './App.css'
import { useEffect } from 'react'
import PageFeed from './components/PageFeed.jsx'

function App() {
useEffect(() => {
  document.title = 'Сеть друзей'
}, [])
  return (
    <>
      <PageFeed/>
    </>
  )
}

export default App