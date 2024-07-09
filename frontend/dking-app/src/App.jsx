import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './pages/index.jsx'
import SignupForm from './pages/signup.jsx'
import Dashboard from './pages/dashboard.jsx'
import ProfilePage from './pages/profile.jsx'
import './App.css'
import WithdrawPage from './pages/withdrawPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DepositPage from './pages/depositPage.jsx'
import History from './pages/history.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/withdraw' element={<WithdrawPage />} />
          <Route path='/deposit' element={<DepositPage />} />
          <Route path='/history' element={<History />} />




        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


