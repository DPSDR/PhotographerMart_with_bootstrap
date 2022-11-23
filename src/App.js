import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Images from './Components/Pages/Images/Images';
import Services from './Components/Pages/Services/Services';
import Blog from './Components/Pages/Blog/Blog';
import About from './Components/Pages/About/About'
import Navbar from './Components/Header/Navbar/Navbar';
import Signin from './Components/Login/SignIn/SignIn';
import SignUp from './Components/Login/SignUp/SignUp';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/images' element={<Images></Images>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route to='/signin' element={<Signin></Signin>}></Route>
        <Route to='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
