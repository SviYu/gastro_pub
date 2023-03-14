import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import News from './pages/news/News';
import Team from './pages/team/Team';


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/gastro_pub' element={ <Home />} />
        <Route path='/kontakt' element={ <Contact />} />
        <Route path='/nyheder' element={ <News />} />
        <Route path='/galleri' element={ <Gallery />} />
        <Route path='/menu' element={ <Menu />} />
        <Route path='/om-gastropub' element={ <About />} />
        <Route path='/vores-team' element={ <Team />} />
        
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
