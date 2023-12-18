
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './about'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      /* using of route path */
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<h1>this is my contact page</h1>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
