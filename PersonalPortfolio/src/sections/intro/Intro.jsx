import { useEffect, useRef } from 'react'
import './intro.scss'
import { init } from 'ityped'

export default function Intro() {

  const dynamicText = useRef();
  useEffect(()=>{
    init(dynamicText.current, {
       showCursor: false, 
       backDelay: 1500,
       strings: ['FREELANCER', 'WEB-DEVELOPER' ] });


  },[])


 
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="proflieContainer">
          <img src="assets/ME.png" alt="profile-pic" />
        </div>
      </div>
      <div className="right">
        <div className="textWrapper">
          <img src="assets/intro.svg" alt="" />
          <h2>Oh hello there, looking for me?</h2>
          <h2>Hi, I'm</h2>
          <h1>Kaustubh Patil</h1>
          <h3>I'm a <span> FREELANCER </span> | WEB-DEVELOPER
             <div>INTERN ENGINEER <span>| DESIGNER</span></div></h3>

        </div>
        <a href='#portfolio'>
          <img src="assets/down.png" alt="" />
          {/* <ArrowDownwardIcon/> */}
        </a>

      </div>
    </div>
  )
}
