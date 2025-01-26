import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from "./components/pages/Layout"
import Intro from "./components/pages/Intro-page"
import Blog from "./components/pages/Blog-page"
import Contact from "./components/pages/Contact-page"

function App() {
  return (
    <BrowserRouter>
    <Layout />
      <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact/>} />
                {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App
