import './App.css';
import ResponsiveAppBar from './components/responsiveappbar'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from './components/home'
import { About } from './components/about'
import { Contact } from './components/contact'
import { Product } from './components/product'
import { Footer } from './components/footer'
import { Menubar } from './components/menubar'
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
      {/* <CssBaseline />
      <Menubar />
      <Home /> */}
      {/*<Router>*/}
      <CssBaseline />
      <Menubar />
      <Router basename="/vedvriksh_web/">
        <Routes>
          <Route exact path='/vedvriksh_web/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;