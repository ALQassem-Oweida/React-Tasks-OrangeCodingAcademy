import React from 'react'
import About from './About'
import Contact from './Contact'

import MainContant from './MainContant'


// const dark={
//   color:"white",
//   backgroundColor:"black",
// };


function Contant(props) {
  return (
  <div className={props.mode}>
    <About mode='dark_modes' bg1="./colors_mix.png" bg2="./bgdark.jpg"/>
    <Contact mode='dark_modes'/>
    <MainContant mode='dark_modes'/>
  </div>

  )
}

export default Contant
