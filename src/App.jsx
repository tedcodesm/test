import { Route, Routes } from 'react-router'
import './index.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import WeatherPage from './pages/WeatherPage'

function App() {

  return (
 <div className='bg-green-100'>
   <Routes>
    <Route index path='/' element={<HomePage/>} />
    <Route  path='/login' element={<LoginPage/>} />
    <Route  path='/signup' element={<SignupPage/>} />
    <Route  path='/weather' element={<WeatherPage/>} />
  </Routes>
 </div>
  )
}

export default App
