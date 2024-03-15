import './App.css'
import { useEffect } from 'react'
import PageFeed from './components/PageFeed.jsx'
import { useDispatch } from "react-redux";
import { fetchPosts } from "./store/postsSlice";
import {fetchUsers} from './store/usersSlice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    document.title = 'Сеть друзей'
      dispatch(fetchPosts()) 
      dispatch(fetchUsers()) 
  }, [])

  return (
    <>
      <PageFeed/>
    </>
  )
}

export default App