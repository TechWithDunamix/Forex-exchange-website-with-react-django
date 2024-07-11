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
import AboutPage from './pages/about'
import ContactPage from './pages/contact.jsx'
import LoginForm from './pages/loginPage.jsx'
import SetPasswordPage from './pages/resetPassword.jsx'
const isAuth = localStorage.getItem("token")
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/dashboard' element={isAuth ? <Dashboard /> : <LoginForm />} />
          <Route path='/profile' element={isAuth ? <ProfilePage /> : <LoginForm />} />
          <Route path='/withdraw' element={isAuth ? <WithdrawPage /> : <LoginForm />} />
          <Route path='/deposit' element={isAuth ? <DepositPage /> : <LoginForm /> } />
          <Route path='/history' element={isAuth ?  <History /> : <LoginForm /> } />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact-us' element={<ContactPage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/forgot-password' element={<SetPasswordPage />} />







        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



