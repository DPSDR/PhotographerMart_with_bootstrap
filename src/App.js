import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Images from './Components/Pages/Images/Images';
import Services from './Components/Pages/Services/Services';
import Blog from './Components/Pages/Blog/Blog';
import About from './Components/Pages/About/About'
import Navbar from './Components/Header/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import NotFound from './Components/Pages/NotFound/NotFound';
import RequireAuth from './Components/RequiredAuth/RequiredAuht';
import CheckOut from './Components/Pages/CheckOut/CheckOut';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/images' element={<Images></Images>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
}

export default App;
