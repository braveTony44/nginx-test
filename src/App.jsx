import './App.css'
import {Route,Routes} from 'react-router-dom'
import About from './controlers/About'
import Login from './controlers/Login'
import Signup from './controlers/Signup'
import Nav from './controlers/Nav'
function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Nav/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
    </>
  )
}

export default App
