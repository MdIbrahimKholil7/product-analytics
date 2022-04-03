import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
