import './App.css';
import Home from "./Pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import { useContext, useEffect } from 'react';
import { AuthContext, FirebaseContext } from './Contexts/Context';
import { getAuth, onAuthStateChanged, setPersistence } from "firebase/auth";
import CreatePage from './Pages/CreatePage';
import EditprofilePage from './Pages/EditprofilePage';
import ViewPrdtPage from './Pages/ViewPrdtPage';
import Post  from './Contexts/ProductContext';
import Favorite from './Components/Favorite/Favorite';

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
    <Post>
      <BrowserRouter>
       <Routes>
       <Route element={<Home />} path='/'/>
       <Route element={<SignupPage/>} path='/signup'/>
       <Route element={<LoginPage/>} path='/login'/>
       <Route element={<EditprofilePage/>} path='/editProfile/info'/>
       <Route element={<CreatePage/>} path='/createProduct'/>
       <Route element={<ViewPrdtPage/>} path='/viewProduct'/>
       <Route element={<Favorite/>} path='/favorites'/>
        </Routes>
      </BrowserRouter>
      </Post>
     
    </div>
  );
}

export default App;
