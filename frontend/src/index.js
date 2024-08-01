import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Bot } from './bot';
import { Appbar } from './appbar';
import { Login } from './login';
import { Aboutme } from './about';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    sessionStorage.getItem('logged')
  ?
    <>
     <BrowserRouter>
        <Routes>
          <Route  excat path='/'  Component={()=><Appbar />}/>
          <Route  excat path='/bot'  Component={()=><Bot />}/>
          <Route  excat path='/about'  Component={()=><Aboutme />}/>
        </Routes>
    </BrowserRouter>
    </>
    :
    <Login />
);


