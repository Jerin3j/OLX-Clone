import './App.css';
import Home from "./Pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route element={<Home />} path='/'/>
       <Route element={<SignupPage/>} path='/signup'/>
       <Route element={<LoginPage/>} path='/login'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
