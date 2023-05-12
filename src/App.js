import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Page/Shared/Navbar';
import Home from './Page/Home/Home';
import Chakout from './Page/Chakout/Chakout';
import Login from './Page/Login/Login';
import Blogs from './Page/Blogs/Blogs';
import Signup from './Page/Login/Signup';
import RequireAuth from './Page/Login/RequireAuth';
import PageNotFound from './Page/Shared/PageNotFound';
import AboutPage from './Page/AboutPage/AboutPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Service from './Page/Service/Service';
import Contact from './Page/Contact/Contact';



function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/aboutPage' element={<AboutPage></AboutPage>}></Route>
        <Route path='/chakout' element={<RequireAuth><Chakout></Chakout></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
