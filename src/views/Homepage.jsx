import React from 'react'
import NavBar from './../components/NavBar.jsx'
import Footer from './../components/Footer.jsx'
import Piccard from './../components/Piccard.jsx'
import Arts from './../assets/arts.png'
import Luck from './../assets/luck.png'
import Science from './../assets/science.png'
import Global from './../assets/global.png'

function Homepage() {
  return (
    <>
    <NavBar />
    <h1>Homepage</h1>
    <br />
    <Piccard showimg={Arts} wi={"100px"}/>
    <br />
    <Piccard showimg={Luck} wi={"50px"}/>
    <br />
    <Piccard showimg={Science} wi={"200px"}/>
    <br />
    <Piccard showimg={Global} wi={"30px"}/>
    <br />
    <Footer />
    </>
  )
}

export default Homepage