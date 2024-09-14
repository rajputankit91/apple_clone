import { useState, useEffect } from 'react'
import './App.css'
import Iphone from './iPhone/Iphone';
import Support from './Comm-Components/support/supportCom';
import Home from './Home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Home />}/>
        <Route path='/Iphone' element={<Iphone />}/>
        <Route path='/Support' element={<Support />}/>
      </Routes>
    </Router>
  )
}

export default App


// Iphone page
// task
// 1 navbar
// 2 navbar css
// 3 main
//    -section ribbon
//      -HTML
//      -css
//    -section welcome
//      -HTML
//      -css
//    -section consider
//      -HTML
//      -css
//    -section switch
//      -HTML
//      -css
//    -section select
//      -HTML
//      -css
//    -section banner
//      -HTML
//      -css
//    -section incentive
//      -HTML
//      -css
//    -section essential
//      -HTML
//      -css
//    -section arguments
//      -HTML
//      -css
//    -section index
//      -HTML
//      -css

// 4 main css
// 5 footer
// 6 footer css