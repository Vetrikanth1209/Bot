import { useNavigate } from 'react-router-dom';
import './appbar.css';
import Bot from './bot.png';
import NavIcon from './bot-icon.png'
import Git from './Git.png'
import Linkedin from './Linkedin.png'
import Medium from './Medium.png'

export const Appbar = () => {
  const nav = useNavigate();

  return (
    <>
      {/* Top Navigation Bar */}
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
            <div className="home-icon" onClick={() => nav('/')}>
              <div className="roof">
                <div className="roof-edge"></div>
              </div>
              <div className="front"></div>
            </div>
          </li>
          <li>
            {/* Add the button above the bot icon */}
            <div className="about-icon" onClick={() => nav('/bot')}>
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
        <div style={{display:'flex'}}  >
          <div className="header-container">
          <h1>GEN BOT CONVO</h1>
        </div>
        <img src={Bot} alt="Bot" className="fixed-top-image" />
        </div>
      </section>
      <div className="container" style={{marginLeft:'150px',marginTop:'-450px',width:'800px'}}>
      <div className="row mt-5">
        <div className="col-12 text-center"style={{marginLeft:'50px',marginTop:'70px'}}>
          <h2 className="my-4 mx-2 mx-sm-0" >Make Queries in a Single Word</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10">
          <div className="p-3 p-sm-4 bg-white rounded shadow-sm shadow-sm-sm" style={{height:'300px',backgroundColor:'whitesmoke',textAlign:'center',marginTop:'20px',marginLeft:'50px'}}>
           <h1 className="about_text" style={{marginTop:'-10px'}}>
              Hello 👋🏻, I am a General Purpose Chatbot. I can answer general information about your given queries or any topics with a short answer....
            </h1>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
