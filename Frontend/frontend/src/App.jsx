import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './layout/Layout';
import Home from './components/home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element = {<Layout />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
