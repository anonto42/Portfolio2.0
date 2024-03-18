import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import ProjectShow from './Pages/Project/ProjectShow'
import Skills from './Pages/Skiles/Skills'
import Root from './Pages/RootPage/Root'
import HireIng from './Pages/HireMe/HireIng'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
      <BrowserRouter>
        <Root>
          <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path='/projucts' element={<ProjectShow/>} />
            <Route path='/skills' element={<Skills/>} />
            <Route path='/hire' element={<HireIng/>} />
          </Routes>
        </Root>
        <ToastContainer />
      </BrowserRouter>
  )
}

export default App
