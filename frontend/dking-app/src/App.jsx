import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/index.jsx';
import SignupForm from './pages/signup.jsx';
import Dashboard from './pages/dashboard.jsx';
import ProfilePage from './pages/profile.jsx';
import WithdrawPage from './pages/withdrawPage';
import DepositPage from './pages/depositPage.jsx';
import History from './pages/history.jsx';
import AboutPage from './pages/about';
import ContactPage from './pages/contact.jsx';
import LoginForm from './pages/loginPage.jsx';
import SetPasswordPage from './pages/resetPassword.jsx';
import UsersPage from './admin/userPage.jsx';
import AdminDepositPage from './admin/depositpage.jsx';
import AdminWIthdrawalsPage from './admin/withdrawPage.jsx';
import OtpPage from './admin/otps.jsx';
import AdminHome from './admin/adminHome.jsx';
import AdminLoginForm from './admin/login.jsx';
import './App.css';
import AdminPlans from './admin/plans.jsx';
import NotFoundPage from './pages/notFoundPage.jsx';
import PlanPage from './pages/plansPage.jsx';
import BuyPlanPage from './pages/buyplans.jsx';
import RecPage from './pages/reciept.jsx';
import Investments from './admin/investments.jsx';

const isAuth = localStorage.getItem("token");

function App() {
  const [count, setCount] = useState(0);
  const [show,setSetShow] = useState(false)
  const params = new URLSearchParams(window.location.search);
  params.get("referal") && localStorage.setItem('ref',params.get("referal"))
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    if (!document.querySelector("#google_translate_script")) {
      const addScript = document.createElement("script");
      addScript.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
      addScript.setAttribute("id", "google_translate_script");
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }
  }, []);
const isAdmin = localStorage.getItem("admin_token")
  return (
    <>
      <BrowserRouter>
        <div id="google_translate_element" className="translate-widget"></div>
        {/* <button onClick={() => setSetShow(!show)} className='bg-green-500 text-white px-2 py-1 rounded-xl'>Translate</button> */}
        <Routes>
          <Route path='*' element={<NotFoundPage />} />

          <Route index element={<HomePage />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/dashboard' element={isAuth ? <Dashboard /> : <LoginForm />} />
          <Route path='/profile' element={isAuth ? <ProfilePage /> : <LoginForm />} />
          <Route path='/withdraw' element={isAuth ? <WithdrawPage /> : <LoginForm />} />
          <Route path='/deposit' element={isAuth ? <DepositPage /> : <LoginForm />} />
          <Route path='/history' element={isAuth ?  <History /> : <LoginForm />} />

          <Route path='/buy-plan' element={isAuth ?  <BuyPlanPage /> : <LoginForm />} />
          <Route path='/buy-plan/r' element={isAuth ?  <RecPage /> : <LoginForm />} />

          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact-us' element={<ContactPage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/forgot-password' element={<SetPasswordPage />} />
          <Route path='/plans' element={<PlanPage />} />


          {/*  Admin urls */}
          <Route path='/admin-home' element={isAdmin ? <AdminHome /> : <AdminLoginForm />} />
          <Route path='/admin/users' element={isAdmin ? <UsersPage /> : <AdminLoginForm />} />
          <Route path='/admin/deposits' element={isAdmin ? <AdminDepositPage /> : <AdminLoginForm />} />
          <Route path='/admin/withdrawals' element={isAdmin ? <AdminWIthdrawalsPage /> : <AdminLoginForm />} />
          <Route path='/admin/otps' element={isAdmin ? <OtpPage /> : <AdminLoginForm />} />
          <Route path='/admin' element={isAdmin ? <AdminHome /> : <AdminLoginForm />} />
          <Route path='/admin/plans' element={isAdmin ? <AdminPlans /> : <AdminLoginForm />} />
          <Route path='/admin/investments' element={isAdmin ? <Investments /> : <AdminLoginForm />} />

          <Route path='/admin/login' element={<AdminLoginForm />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

 
const ProtectAdmin = ({children}) => {
  if (isAdmin){
    return (<>
    {children}
    </>)
  }else{
    window.location.href='/admin/login'
  }
}
export default App;
