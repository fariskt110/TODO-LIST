import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Add from './pages/addtodo/Add';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import View from './pages/viewtodo/View';

function App() {
  return (
    <>
    <BrowserRouter></BrowserRouter>
    <Routes>
      <Route path='/navbar' element={<Navbar/>}></Route>
      <Route path='/footer' element={<Footer/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addtodo' element={<Add/>}></Route>
      <Route path='/viewtodo' element={<View/>}></Route>
    </Routes>  
    </>
  );
}

export default App;
