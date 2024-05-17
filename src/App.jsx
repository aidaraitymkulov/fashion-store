import "./style/App.css"
import { Header } from './components/Header'
import {Hero} from './components/Hero'
import { Products } from "./components/product"
import { Routes, Route } from 'react-router-dom'
import { Shop } from './pages/Shoppage'
import { LookBook } from './pages/LookBookpage'
import { Features } from './pages/Featurespage'
import { Pages } from './pages/Pages'
import { Blog } from './pages/Blogpage'

const App = () => {
  return (
    <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<><Hero />, <Products /></>}/>
            <Route path='/Shop' element={< Shop/>}/>
            <Route path='/LookBook' element={< LookBook/>}/>
            <Route path='/Features' element={< Features/>}/>
            <Route path='/Pages' element={< Pages/>}/>
            <Route path='/Blog' element={< Blog/>}/>
         </Routes>

    </div>
  );
}

export default App;
