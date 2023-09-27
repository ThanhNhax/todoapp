import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Link from './pages/Link';
import TodoApp from './components/TodoApp';
import DemoApi from './components/DemoApi';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/todo-app' element={<TodoApp />} />
        <Route path='/link' element={<Link />} />
        <Route path='/demo-api' element={<DemoApi />} />
      </Route>
        <Route path='/auth' element={<Login />}></Route>
    </Routes>
  </BrowserRouter>
);
