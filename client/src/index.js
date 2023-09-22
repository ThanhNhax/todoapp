import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Link from './pages/Link';
import TodoApp from './components/TodoApp';
import DemoApi from './components/DemoApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/todo-app' element={<TodoApp />} />
        <Route path='/link' element={<Link />} />
        <Route path='/demo-api' element={<DemoApi />} />
        
      </Route>
    </Routes>
  </BrowserRouter>
);
