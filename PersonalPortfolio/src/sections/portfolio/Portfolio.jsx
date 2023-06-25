import './portfolio.scss'
import PortfolioList from '../portfoliolist/PortfolioList';
import { useState } from 'react';

export default function Portfolio() {

  const [selected, setSelected] = useState("featured")
  const listItems = [
    {
      id: "featured",
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
        {listItems.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="contains">
        <div className="items">
          <img src="assets/grow.png" alt="" />
          <h3>
            GROBBIZ | Landing-Page

          </h3>
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
      </div>
      <a href='#contact'>
        <img src="assets/down.png" alt="" />
      </a>
    </div>

  )
}
