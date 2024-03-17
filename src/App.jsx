import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import ModulRoot from './Pages/RootPage/ModulRoot'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModulRoot/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
