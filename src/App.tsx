
import './App.css'
import Navbar from './components/ui/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import TrackRequests from './pages/TrackRequests'
import Footer from './components/Footer/Footer'
import { Box } from '@mui/material'
function App() {
 

  return (
    <>
      <Navbar/>
      <Box mt={"68px"}>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/track-requests' element={<TrackRequests/>} />
      </Routes>
      <Footer/>
      </Box>
    </>
  )
}

export default App
