
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './home'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      /* using of route path */
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<h1>about page</h1>} />
      <Route path='/contact' element={<h1>this is my contact page</h1>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
