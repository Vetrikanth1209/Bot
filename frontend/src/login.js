import './login.css';
import { useState } from "react";
import Bluebot from './blue-bot.png';
import Bluebot1 from './blue-bot-1.png';
import { callcred } from './axios';


export const Login = () => {
  const [users, setUsers] = useState({
    username: "",
    password: ""
  });

  const collect = (eve) => {
    const { name, value } = eve.target;
    setUsers((old) => ({
      ...old,
      [name]: value
    }));
  };

  const sub = async () => {
   const res = await callcred(users);
    alert(JSON.stringify(users));
    window.location.assign("/")
    if (res.data) {
      sessionStorage.setItem("logged", JSON.stringify(users));
      window.location.assign("/")
    }
  };

  const clearFields = () => {
    setUsers({
      username: "",
      password: ""
    });
  };

  return (
    <div className='fullbody'>
      <div className="login-container">
      <img src={Bluebot1} alt="Bluebot" className="image-up" style={{ width:'900px',marginLeft:'-430px',marginRight:'-150px'}} />
      <div style={{ padding: '80px', backgroundColor: 'lightblue', borderRadius: '20px', boxShadow: '5px 5px 30px black' ,width:'100vw',marginRight:'150px',marginLeft:'150px'}}>
        <form className="form" autoComplete="off">
          <div className="control" style={{marginTop:'-100px',marginLeft:'60px',marginBottom:'50px'}}>
            <h1 style={{fontSize:'2.5rem'}}>Sign In</h1>
          </div>
          <div className="control block-cube block-input">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={users.username}
              onChange={collect}
            />
            <div className="bg-top">
              <div className="bg-inner"></div>
            </div>
            <div className="bg-right">
              <div className="bg-inner"></div>
            </div>
            <div className="bg">
              <div className="bg-inner"></div>
            </div>
          </div>
          <div className="control block-cube block-input">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={users.password}
              onChange={collect}
            />
            <div className="bg-top">
              <div className="bg-inner"></div>
            </div>
            <div className="bg-right">
              <div className="bg-inner"></div>
            </div>
            <div className="bg">
              <div className="bg-inner"></div>
            </div>
          </div>
          <button className="btn block-cube block-cube-hover" type="button" onClick={sub}>
            <div className="bg-top">
              <div className="bg-inner"></div>
            </div>
            <div className="bg-right">
              <div className="bg-inner"></div>
            </div>
            <div className="bg">
              <div className="bg-inner"></div>
            </div>
            <div className="text">Log In</div>
          </button>
          <button className="btn block-cube block-cube-hover" type="button" onClick={clearFields} style={{marginTop:'20px'}}>
            <div className="bg-top">
              <div className="bg-inner"></div>
            </div>
            <div className="bg-right">
              <div className="bg-inner"></div>
            </div>
            <div className="bg">
              <div className="bg-inner"></div>
            </div>
            <div className="text">Clear</div>
          </button>
        </form>
      </div>

      <div className="image-container">
        <img src={Bluebot} alt="Bluebot" className="image-down" style={{width:'900px' }} />
      </div>

      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake">❅</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
      </div>
    </div>
    </div>
  );
};
