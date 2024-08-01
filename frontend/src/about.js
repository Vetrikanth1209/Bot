import './menu.css';
import YellowBot from './yellow-bot.png';
import { useNavigate } from 'react-router-dom';
import NavIcon from './bot-icon.png';
import Git from './Git.png';
import Linkedin from './Linkedin.png';
import Medium from './Medium.png';
import { Card, CardContent, Typography } from '@mui/material';

export const Aboutme = () => {
  const nav = useNavigate();

  const handleLogOut = () => {
    sessionStorage.removeItem('logged');
    window.location.assign('/');
  };

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
            <div className="home-icon" onClick={() => nav('/')}>
              <div className="roof">
                <div className="roof-edge"></div>
              </div>
              <div className="front"></div>
            </div>
          </li>
          <li>
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
            <div className="mail-icon" onClick={handleLogOut}>
              <div className="mail-base">
                <div className="mail-top"></div>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px',width:'70vw' }}>
        <Card
          style={{
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            marginLeft:'300px'
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#2a2a72',
              }}
            >
              ChatBot Description
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}
            >
              <strong>Overview:</strong> Our WikiBot is an interactive chatbot designed to provide users with concise and
              accurate information based on queries made using specific search keywords. Leveraging data fetched directly
              from Wikipedia through web scraping, the bot ensures users receive the most relevant information in a
              timely manner.
              <br />
              <br />
              <strong>Features:</strong>
              <ul>
                <li>
                  <strong>Short Answers:</strong> WikiBot delivers succinct answers tailored to the user's query,
                  focusing on key points to ensure clarity and brevity.
                </li>
                <li>
                  <strong>Keyword-Driven Searches:</strong> To maintain relevance, every user query must include a search
                  keyword. This keyword helps the bot filter through vast data, pulling only the most pertinent details
                  from Wikipedia.
                </li>
                <li>
                  <strong>Real-time Interaction:</strong> Users can engage with the bot in real time, receiving
                  immediate responses to their questions.
                </li>
                <li>
                  <strong>User-friendly Interface:</strong> The application features a clean and intuitive design,
                  making navigation seamless across all pages.
                </li>
              </ul>
              <br />
              <strong>Pages:</strong>
              <ul>
                <li>
                  <strong>Home Page:</strong> Provides a brief introduction to WikiBot and its capabilities, highlights
                  the main features, and includes quick links to other parts of the website, such as the Sign-In and Bot
                  Interaction pages.
                </li>
                <li>
                  <strong>Bot Interaction Page:</strong> The heart of the application where users interact with WikiBot.
                  A chat interface powered by React, enabling users to type their queries and receive instant answers.
                </li>
                <li>
                  <strong>About Page:</strong> Offers detailed information about the WikiBot project, its development,
                  and the technologies used. Introduces the development team behind WikiBot and provides contact
                  information.
                </li>
                <li>
                  <strong>Sign-In Page:</strong> Secure login and registration functionality for users, built with
                  Bootstrap forms and MongoDB for data storage.
                </li>
              </ul>
              <br />
              <strong>Technologies Used:</strong>
              <ul>
                <li>
                  <strong>Frontend:</strong> React, Bootstrap, CSS/HTML
                </li>
                <li>
                  <strong>Backend:</strong> Express, Node.js
                </li>
                <li>
                  <strong>Database:</strong> MongoDB
                </li>
                <li>
                  <strong>Web Scraping:</strong> Wikipedia data retrieval
                </li>
              </ul>
              <br />
              <strong>How It Works:</strong>
              <ul>
                <li>
                  <strong>Query Submission:</strong> Users submit a question through the Bot Interaction Page, ensuring
                  the inclusion of a mandatory search keyword.
                </li>
                <li>
                  <strong>Data Retrieval:</strong> The backend utilizes web scraping scripts to pull the relevant
                  information from Wikipedia based on the provided keyword.
                </li>
                <li>
                  <strong>Response Generation:</strong> WikiBot processes the fetched data, extracting the most critical
                  points to generate a short, informative response.
                </li>
                <li>
                  <strong>User Response:</strong> The bot sends the response back to the user in real-time, displaying
                  it on the chat interface.
                </li>
              </ul>
              <br />
              <strong>Example Interaction:</strong>
              <ul>
                <li>
                  <strong>User:</strong> "search Python programming language. Keyword: search"
                </li>
                <li>
                  <strong>WikiBot:</strong> "Python is a high-level, interpreted programming language known for its easy
                  syntax and versatility. It's widely used for web development, data analysis, artificial intelligence,
                  scientific computing, and more."
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div style={{ position: 'fixed', top: '150px', right: '50px' }}>
        <img src={YellowBot} alt="Bot" className="image-yellow" />
      </div>
    </>
  );
};
