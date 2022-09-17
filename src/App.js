import './App.css';
import ResponsiveAppBar from './components/responsiveappbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from './components/home'
import { About } from './components/about'
import { Contact } from './components/contact'
import { Product } from './components/product'
import { Footer } from './components/footer'
import { Menubar } from './components/menubar'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <div className='app'>
      {/* <CssBaseline />
      <Menubar />
      <Home /> */}
      <Router>
        <CssBaseline />
        <Menubar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='about' element={<About/>} />
          <Route exact path='product' element={<Product/>} />
          <Route exact path='contact' element={<Contact/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;