import { Routes, Route } from 'react-router'
import HomePage from './pages/home/HomePage'
import SignupPage from './pages/signup/SignupPage'
import LoginPage from './pages/login/LoginPage'
import './App.css'
import ProfilePage from './pages/profile/ProfilePage'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  )
}

export default App