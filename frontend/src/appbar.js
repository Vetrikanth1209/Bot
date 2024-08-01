import { useNavigate } from 'react-router-dom';
import './appbar.css';
import Bot from './bot.png';
import NavIcon from './bot-icon.png'
import Git from './Git.png'
import Linkedin from './Linkedin.png'
import Medium from './Medium.png'
import { Button} from '@mui/material';

export const Appbar = () => {
  const nav = useNavigate();
  const handleLogOut = () => {
    sessionStorage.removeItem('logged');
    window.location.assign("/");
};

  return (
    <>
      <div className="top-nav">
        <ul className="top-nav-list">
        <img src={NavIcon} alt="Bot" rel='icon'style={{width:'50px'}} />
        <div style={{display:'flex',alignItems:'center',marginLeft:'1150px'}} >
        <a href='https://github.com/Vetrikanth1209'><img src={Git} alt="Bot" rel='icon'style={{width:'40px'}} /></a>
        </div>
        <div style={{display:'flex',alignItems:'center',marginLeft:'-150px'}}>
        <a href='https://www.linkedin.com/in/vetri-kanth-9ba868249/'><img src={Linkedin} alt="Bot" rel='icon'style={{width:'50px'}} /></a>
        </div>
        <div style={{display:'flex',alignItems:'center',marginLeft:'-150px'}}>
        <a href='https://medium.com/@vetree1209mec'><img src={Medium} alt="Bot" rel='icon'style={{width:'60px'}} /></a>
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
            <div className="work-icon" onClick={() => nav('/about')}>
              <div className="paper"></div>
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
            </div>
          </li>
          <li>
            <div className="mail-icon"onClick={handleLogOut}>
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
          <h1>WIKI BOT</h1>
        </div>
        <img src={Bot} alt="Bot" className="top-image" />
        </div>
      </section>
      <div className="container" style={{marginLeft:'150px',marginTop:'-450px',width:'800px'}}>
      <div className="row mt-5">
        <div className="col-12 text-center"style={{marginLeft:'150px',marginTop:'0px',marginBottom:'70px'}}>
          <h2 className="my-4 mx-2 mx-sm-0" >Make Queries in a Single Word</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10">
          <div style={{height:'300px',backgroundColor:'whitesmoke',textAlign:'center',marginTop:'-20px',marginLeft:'20px',boxShadow:'2px 2px 30px black',borderRadius:'30px',width:'900px'}}>
           <h1 className="about_text" style={{marginTop:'-30px'}}>
              Hello 👋🏻, I am a General Purpose Chatbot. I can answer general information about your given queries or any topics with a short answer.... USE keyword "search" 
              <Button variant='standard' style={{backgroundColor:'crimson',color:'white',marginLeft:'30px',marginTop:'10px'}}onClick={()=>nav('/bot')}>Go To Bot</Button>
            </h1>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
