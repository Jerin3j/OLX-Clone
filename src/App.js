import './App.css';
import Home from "./Pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from './Pages/SignupPage';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route element={<Home />} path='/'/>
       <Route element={<SignupPage/>} path='/signup'/>
       <Route element={<Login/>} path='/login'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
