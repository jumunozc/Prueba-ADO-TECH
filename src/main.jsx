import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../src/Components/Login/Login';
import Albums from './Components/GenericViews/Albums';
import App from './Components/GenericViews/App';
import Comments from './Components/GenericViews/Comments';
import Photos from './Components/GenericViews/Photos';
import Posts from './Components/GenericViews/Posts';
import Todos from './Components/GenericViews/Todos';
import Dashboard from './Components/MasterController/Dashboard';
import { AppContextProvider } from './Context/AppContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AppContextProvider>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/users" element={<App />} />
      </Routes>
    </AppContextProvider>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>

);

