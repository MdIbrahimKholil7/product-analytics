import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route to='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
