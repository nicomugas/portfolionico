
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import './App.css';
import About from './components/About';
import Contacto from './components/Contacto';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';



function App() {
  return (
    <BrowserRouter> 
       <Navbar/>       
        <Routes>
        <Route exact path='/' element={<Home/>} />
          <Route exact path='/About' element={<About/>} />
          <Route exact path="/Portfolio" element={<Portfolio/>} />
          <Route path='/Contacto' element={<Contacto/>} />
        </Routes>     
    </BrowserRouter>
  )
}

export default App;
