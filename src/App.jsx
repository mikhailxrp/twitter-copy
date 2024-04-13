import './App.css'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import PageFeed from './pages/PageFeed'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'

import ChangePassword from './pages/ChangePassword';
import ChangeEmail from './pages/ChangeEmail';

import Header from './components/Header'
import Footer from './components/Footer'
import { useDispatch } from "react-redux";
import { fetchPosts } from "./store/postsSlice";
import { fetchUsers } from './store/usersSlice'
import { setUser } from './store/userSlice'



function App() {

  const dispatch = useDispatch()

  async function getUser() {
    const response = await fetch('/api/server/getuser')

    const data = await response.json()

    dispatch(setUser(data.user))

  }

  useEffect(() => {
    document.title = 'Сеть друзей'
    dispatch(fetchPosts())
    dispatch(fetchUsers())
    getUser()
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/feed' element={<PageFeed />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/settings/profile' element={<SettingsPage />} />
        <Route path='/settings/password' element={<ChangePassword />} />
        <Route path='/settings/email' element={<ChangeEmail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App