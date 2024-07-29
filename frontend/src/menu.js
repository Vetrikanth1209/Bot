import './menu.css';
import Bot from './bot.png';
import { useNavigate } from 'react-router-dom';

export const Menu = () => {
  const nav = useNavigate()
  return (
    <>
      <nav style={{ marginLeft: '20px' }}>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <div className="home-icon" onClick={()=>nav('/')}>
              <div className="roof">
                <div className="roof-edge"></div>
              </div>
              <div className="front"></div>
            </div>
          </li>
          <li>
            <div className="about-icon" onClick={()=>nav('/bot')}>
              <div className="head">
                <div className="eyes"></div>
                <div className="beard"></div>
              </div>
            </div>
          </li>
          <li>
            <div className="work-icon">
              <div className="paper"></div>
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
            </div>
          </li>
          <li>
            <div className="mail-icon">
              <div className="mail-base">
                <div className="mail-top"></div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <section>
        <img src={Bot} alt="Bot" className="fixed-top-image" />
      </section>
    </>
  );
};
