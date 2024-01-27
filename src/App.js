import './App.css';
import About from './Pages/About/About';
import Team from './Pages/About/Team';
import Testimonials from './Pages/Home/Testimonials';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Faq from './Pages/FAQ/Faq';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Portfolio from './Pages/Portfolio/Portfolio';
import Pricing from './Pages/Pricing/Pricing';
import Services from './Pages/Home/Services';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './Pages/Shared/Footer';
import Order from './Pages/Order/Order';
import OrderStatus from './Pages/Order/OrderStatus';

function App() {
  return (
    <div  className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='team' element={<Team></Team>}></Route>
        <Route path='testimonials' element={<Testimonials></Testimonials>}></Route>
        <Route path='services' element={<Services></Services>}></Route>
        <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='pricing' element={<Pricing></Pricing>}></Route>
        <Route path='blog' element={<Blogs></Blogs>}></Route>
        <Route path='faq' element={<Faq></Faq>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='order' element={<Order></Order>}></Route>
        <Route path='orderStatus' element={<OrderStatus></OrderStatus>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
