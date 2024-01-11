import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



import React, { useState } from 'react'

export default function App() {

  const pagesize = 6;

  const country = "in";


  const [progress, setProgress] = useState(0);

  



  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={4}
          progress={progress}
        />
        <Routes>

          <Route path="/" element={<News setProgress={setProgress} pagesize={pagesize} key="general" country={country} category='general'/>} />
          <Route path="/business" element={<News setProgress={setProgress} pagesize={pagesize} key="business" country={country} category='business' />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} pagesize={pagesize} key="entertainment" country={country} category='entertainment' />} />
          <Route path="/health" element={<News setProgress={setProgress} pagesize={pagesize} key="health" country={country} category='health' />} />
          <Route path="/science" element={<News setProgress={setProgress} pagesize={pagesize} key="science" country={country} category='science' />} />
          <Route path="/sports" element={<News setProgress={setProgress} pagesize={pagesize} key="sports" country={country} category='sports' />} />
          <Route path="/technology" element={<News setProgress={setProgress} pagesize={pagesize} key="technology" country={country} category='technology' />} />

        </Routes>
      </Router>
    </div>
  )
}






