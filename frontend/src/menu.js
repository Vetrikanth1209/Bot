import './menu.css';
import Bot from './bot.png';
import { useNavigate } from 'react-router-dom';
import NavIcon from './bot-icon.png'
import Git from './Git.png'
import Linkedin from './Linkedin.png'
import Medium from './Medium.png'

export const Menu = () => {
  const nav = useNavigate()
  return (
    <>
    <div className="top-nav">
        <ul className="top-nav-list">
        <img src={NavIcon} alt="Bot" rel='icon'style={{width:'50px'}} />
        <div style={{display:'flex',alignItems:'center',marginLeft:'1150px'}}>
        <img src={Git} alt="Bot" rel='icon'style={{width:'40px'}} />
        </div>
        <div style={{display:'flex',alignItems:'center',marginLeft:'-150px'}}>
        <img src={Linkedin} alt="Bot" rel='icon'style={{width:'50px'}} />
        </div>
        <div style={{display:'flex',alignItems:'center',marginLeft:'-150px'}}>
        <img src={Medium} alt="Bot" rel='icon'style={{width:'60px'}} />
        </div>
        </ul>
      </div>
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
      <div style={{marginLeft:'650px',marginTop:'0px',position:'fixed'}} className='fixed-top-image'>
      <img src={Bot} alt="Bot" className="fixed-top-image" />
      </div>
    </>
  );
};
