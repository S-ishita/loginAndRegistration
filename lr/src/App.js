import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
        <Route path='/home' element={<Homepage/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
