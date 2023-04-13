import './App.css';
import Home from "./Pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import { useContext, useEffect, useState } from 'react';
import { AuthContext, FirebaseContext } from './Contexts/Context';
import { getAuth, onAuthStateChanged, } from "firebase/auth";
import CreatePage from './Pages/CreatePage';
import EditprofilePage from './Pages/EditprofilePage';
import ViewPrdtPage from './Pages/ViewPrdtPage';
import Post  from './Contexts/ProductContext';
import Loading from './Assets/Loading/Loading';
import FavoritePage from './Pages/FavoritePage';
import NotFound from './Components/404 Error/NotFound';
function App() {

  const {user, setUser} = useContext(AuthContext)
  const app = useContext(FirebaseContext)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth(app)
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [app, setUser])

  if (loading) return (
    <Loading/>
)
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
       <Route element={<FavoritePage/>} path='/favorites'/>
       <Route element={<NotFound/>} path='*'/>
        </Routes>
      </BrowserRouter>
      </Post>
    </div> 
  );
}

export default App;
