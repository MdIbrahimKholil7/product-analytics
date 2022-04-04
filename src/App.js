import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Blog from './components/blog/Blog';
import About from './components/about/About';
import CustomerReview from './components/customerReview/CustomerReview';
import Dashboard from './components/dashboard/Dashboard';
import Contact from './components/contact/Contact';
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/customerReview' element={<CustomerReview/>}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
