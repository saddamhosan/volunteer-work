import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddEvent from './Component/AddEvent';
import Header from './Component/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login';
import Register from './Component/Register';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/event' element={<AddEvent/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
