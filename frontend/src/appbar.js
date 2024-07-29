import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './appbar.css';
import Bot from './bot.png';


export const Appbar = () => {
  const nav = useNavigate()
  return (
    <>
      <nav style={{ marginLeft: '20px' }}>
        <ul style={{ listStyle: 'none' }}>
          <li >
            <div className="home-icon"  onClick={()=>nav('/')}>
              <div className="roof">
                <div className="roof-edge"></div>
              </div>
              <div className="front"></div>
            </div>
          </li>
          <li>
            <div className="about-icon" onClick={()=>nav('/bot')} >
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
        <div className="header-container">
          <h1>GEN BOT CONVO</h1>
         <Button variant='standard'onClick={()=>nav('/bot')}>Lets start</Button>
        </div>
        <h2 style={{marginLeft:'30px'}}>Make Queries in a single Word</h2>
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            width: '50vw',
            height: '40vh',
            marginLeft: '30px',
            boxShadow: '5px 5px 10px crimson',
          }}
        >
          <h1 className="about_text">
            Hello 👋🏻, I am a General Purpose Chatbot. I can answer general information about your given queries or any topics with a short answer....
          </h1>
        </div>
      </section>
    </>
  );
};
