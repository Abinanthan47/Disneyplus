import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
//import Slider from 'react-slick'
import Slider from './components/Slider'
import Header from './components/Header'
import ProductionHouse from './components/ProductionHouse'
import GenreMovieList from './components/GenreMovieList'

function App() {
  return (
    <div className=''>
    <Header/>
    <Slider/>
    <ProductionHouse/>
    <GenreMovieList/>
    </div>
  )
}

export default App