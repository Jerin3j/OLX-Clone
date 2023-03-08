import './App.css';
import Home from "./Pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import { useContext, useEffect } from 'react';
import { AuthContext, FirebaseContext } from './Contexts/Context';
import { getAuth, onAuthStateChanged, setPersistence } from "firebase/auth";
import Editprofile from './Components/EditProfile/Editprofile';
import CreatePage from './Pages/CreatePage';

function App() {

  const {setUser} = useContext(AuthContext)
  const app = useContext(FirebaseContext)

  useEffect( ()=>{
    
    const auth = getAuth(app)
    onAuthStateChanged(auth, user =>(
      setUser(user)
    ))
  }, [])
  return (
    <div className="App">
   
      <BrowserRouter>
       <Routes>
       <Route element={<Home />} path='/'/>
       <Route element={<SignupPage/>} path='/signup'/>
       <Route element={<LoginPage/>} path='/login'/>
       <Route element={<Editprofile/>} path='/editProfile/info'/>
       <Route element={<CreatePage/>} path='/createProduct'/>

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
