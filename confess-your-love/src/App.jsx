import { Routes, Route } from 'react-router'
import HomePage from './pages/home/HomePage'
import SignupPage from './pages/signup/SignupPage'
import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  )
}

export default App