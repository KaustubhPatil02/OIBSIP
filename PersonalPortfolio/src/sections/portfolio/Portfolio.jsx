import './portfolio.scss'
import List from "../portfoliolist/PortfolioList"
import PortfolioList from '../portfoliolist/PortfolioList';
import { useState } from 'react';

export default function Portfolio() {

  const [clicked,isClicked] = useState("feat")
  const listItems =[
    {
      id: "feat",
      title: "Featured",
    },
    {
      id: "apps",
      title: "Web-Apps",
    },
    {
      id: "design",
      title: "Designs",
    },
  ];

  return (
    <div className='port' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {listItems.map(items=>(
          <PortfolioList title={items.title}
           active={clicked ===items.id}
           isClicked={isClicked}
           id={items.id}/>
        ))}
        {/* <li className='active '>Featured</li>
        <li>Web-App</li>
        <li>Designs</li> */}
      </ul>
      <div className="contains">
        <div className="items">
      {/* <a href='https://grobbiz.in/' target='blank'>  */}
          <img src="assets/grow.png" alt="" />
          <h3>
      GROBBIZ | Landing-Page

          </h3>
        {/* </a> */}
        </div>
        <div className="items">
          <img src="assets/chat-app.png" alt="" />
          <h3>React | PRIVATE CHAT APP</h3>
        </div>
        <div className="items">
          <img src="assets/flutter.png" alt="" />
          <h3>Flutter |
            TO-DO APP
          </h3>
        </div>
        <div className="items">
          <img src="assets/rock.png" alt="" />
          <h3>JS | ROCK PAPER SISSOR GAME </h3>
        </div>
        {/* <div className="items">
          <img src="assets/chat-app.png" alt="" />
          <h3>CHAT APP</h3>
        </div>
        <div className="items">
          <img src="assets/chat-app.png" alt="" />
          <h3>CHAT APP</h3>
        </div>
        <div className="items">
          <img src="assets/chat-app.png" alt="" />
          <h3>CHAT APP</h3>
        </div>
        <div className="items">
          <img src="assets/chat-app.png" alt="" />
          <h3>CHAT APP</h3>
        </div> */}
        {/* <img src="assets/port.svg" alt="" /> */}

        
        
        
      </div>
      <a href='#contact'>
          <img src="assets/down.png" alt="" />
        </a>
    </div>

  )
}
