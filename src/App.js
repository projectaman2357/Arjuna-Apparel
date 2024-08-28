import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import Shop from './pages/Shop'; // Adjust the path as necessary
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>  
    <Navbar/>
<Routes>
  <Route path='/' element={<Shop/>}/>
  <Route path='/men' element={<ShopCategory banner={men_banner} category ="men"/>}/>
  <Route path='/women' element={<ShopCategory banner={women_banner} category ="women"/>}/>
  <Route path='/kid' element={<ShopCategory banner={kid_banner} category ="kid"/>}/>
  <Route path="/Product" element={<product/>}>
  <Route path=':productId' element={<product/>}/>
  </Route>
  <Route path='/cart' element={<cart/>}/>
  <Route path='/login' element={<LoginSignup/>}/>
  </Routes>
  <Footer/>
    </BrowserRouter>
    </div>
  );
};

export default App;