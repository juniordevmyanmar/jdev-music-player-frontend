import React, { useEffect, useState } from "react";
import Register from "./features/auth/ui/Register";
import {Routes,Route, Navigate} from 'react-router-dom'
import Homepage from "./pages/HomePage";
import PlaylistsPage from "./pages/PlaylistsPage";
import ArtistPage from "./pages/ArtistPage";
import AlbumPage from "./pages/AlbumPage";
import FavouritePage from "./pages/FavouritePage";
import Login from "./features/auth/ui/Login";
import { useSelector } from "react-redux";
import { getUser } from "./redux/slice/authSlice";

function App() {
  const user = useSelector(getUser)
  const [isLogin,setIsLogin] = useState(false)

  useEffect(() => {
    const data = localStorage.getItem('data')
    console.log(data)
    if(data){
      setIsLogin(true)
    } else {
      setIsLogin(user.data !== '')
    }
   
  },[user])

  return (
    <div className="font-raleway">
    <Routes>
      <Route path="/" element={isLogin ? <Navigate to='/home' replace /> : <Navigate to='/login' replace />}/>
      <Route path="/register" element={isLogin ? <Navigate to='/' replace /> : <Register />}/>
      <Route path="/login" element={isLogin ? <Navigate to='/' replace /> : <Login />}/>
      <Route path="/home" element={isLogin ? <Homepage /> : <Navigate to='/login' replace /> }/>
      <Route path="/playlists" element={isLogin ? <PlaylistsPage /> : <Navigate to='/login' replace /> }/>
      <Route path="/artists" element={isLogin ? <ArtistPage /> : <Navigate to='/login' replace /> }/>
      <Route path="/albums" element={isLogin ? <AlbumPage /> : <Navigate to='/login' replace /> }/>
      <Route path="/favourite" element={isLogin ? <FavouritePage /> : <Navigate to='/login' replace /> }/>
    </Routes>
    </div>
  );
}

export default App;
