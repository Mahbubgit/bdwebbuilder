import './App.css';
import About from './Pages/About/About';
import Team from './Pages/About/Team';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Faq from './Pages/FAQ/Faq';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Portfolio from './Pages/Portfolio/Portfolio';
import Pricing from './Pages/Pricing/Pricing';
import Services from './Pages/Home/Services';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './Pages/Shared/Footer';
import Order from './Pages/Order/Order';
import OrderStatus from './Pages/Order/OrderStatus';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyBookings from './Pages/Dashboard/MyBookings';
import MyReview from './Pages/Dashboard/MyReview';
import RequireAdmin from './Pages/Login/RequireAdmin';
import MyBookingHistory from './Pages/Dashboard/MyBookingHistory';
import AllBookings from './Pages/Dashboard/AllBookings';
import MyProfile from './Pages/Dashboard/MyProfile';
import ManageUsers from './Pages/Dashboard/ManageUsers';
import Testimonials from './Pages/About/Testimonials';
import AddBlog from './Pages/Dashboard/AddBlog';
import ContactMessage from './Pages/Dashboard/ContactMessage';
import AddPortfolio from './Pages/Dashboard/AddPortfolio';
import PortfolioDetail from './Pages/Portfolio/PortfolioDetail';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='team' element={<Team></Team>}></Route>
        <Route path='testimonials' element={<Testimonials></Testimonials>}></Route>
        <Route path='services' element={<Services></Services>}></Route>
        <Route path='portfolioDetail' element={<PortfolioDetail></PortfolioDetail>}></Route>
        <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='pricing' element={<Pricing></Pricing>}></Route>
        <Route path='blog' element={<Blogs></Blogs>}></Route>
        
        <Route path='faq' element={<Faq></Faq>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='order' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyBookings></MyBookings>}></Route>
          <Route path='myBookingHistory' element={<MyBookingHistory></MyBookingHistory>}></Route>
          <Route path='myReview' element={<MyReview></MyReview>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>

          <Route path='contactMessage' element={<RequireAdmin><ContactMessage></ContactMessage></RequireAdmin>}></Route>
          <Route path='addBlog' element={<RequireAdmin><AddBlog></AddBlog></RequireAdmin>}></Route>
          <Route path='addPortfolio' element={<RequireAdmin><AddPortfolio></AddPortfolio></RequireAdmin>}></Route>
          <Route path='allBookings' element={<RequireAdmin><AllBookings></AllBookings></RequireAdmin>}></Route>
          <Route path='manageUsers' element={<RequireAdmin><ManageUsers></ManageUsers></RequireAdmin>}></Route>
        </Route>
        <Route path='orderStatus' element={<OrderStatus></OrderStatus>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
