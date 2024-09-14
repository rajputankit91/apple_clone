import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './navbar/Navbar'
import MainComp from './main/Main';

function App() {

  const [appleData,setAppleData] = useState([]);

  useEffect(() => {
    getAppleData();
  }, [])

  const getAppleData = () => {
    fetch("/api/apple")
      .then((res) => {
        return (
          res.json()
        );
      })
      .then((data) => setAppleData(data.phones))
      .catch((err) => console.log(err))
  }

  // console.log(appleData)
  return (
    <>
    <Navbar data = {appleData} />
    <MainComp />
    </>
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