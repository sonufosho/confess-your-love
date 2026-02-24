import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router'
import useAuthStore from './store/useAuthStore'
import HomePage from './pages/home/HomePage'
import SignupPage from './pages/signup/SignupPage'
import LoginPage from './pages/login/LoginPage'
import ProfilePage from './pages/profile/ProfilePage'
import { Toaster } from 'react-hot-toast'
import './App.css'

function App() {
  const { authUser, authStatus } = useAuthStore();

  useEffect(() => {
    authStatus();
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/:username" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>

      <Toaster />
    </>
  )
}

export default App