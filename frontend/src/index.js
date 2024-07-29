import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Bot } from './bot';
import { Appbar } from './appbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
        <Routes>
          <Route  excat path='/'  Component={()=><Appbar />}/>
          <Route  excat path='/bot'  Component={()=><Bot />}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


