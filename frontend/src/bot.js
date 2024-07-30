import { Button, TextField, Card, CardContent } from '@mui/material';
import { useState } from 'react';
import { callpublish } from './axios'; // Assuming callpublish is a function you've defined to make API calls
import { Menu } from './menu';
import './menu.css';

export const Bot = () => {
  const [datas, setDatas] = useState({
    query: '',
  });

  const [postData, setPostData] = useState(null); // State to hold the response data

  const collect = (eve) => {
    const { name, value } = eve.target;
    setDatas((old) => ({
      ...old,
      [name]: value,
    }));
  };

  const sendData = async () => {
    try {
      alert(JSON.stringify(datas));
      const response = await callpublish(datas);
      setPostData(response.data); // Update state with response data
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <>
      <Menu />

      {/* Conditionally render the Card only if postData is not null */}
      {postData && (
        <Card
          className="results"
          style={{ borderRadius: '50px', boxShadow: '2px 2px 30px gray',backgroundColor:'wheat' }}
        >
          <CardContent>{JSON.stringify(postData)}</CardContent>
        </Card>
      )}

      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          height: 'auto',
          width: '55vw',
          marginLeft: '180px',
          marginTop: '650px',
          padding: '10px',
          boxShadow: '5px 5px 10px crimson',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          bottom: '0',
          marginBottom: '30px',
        }}
      >
        <TextField
          name="query"
          value={datas.query}
          onChange={collect}
          variant="standard"
          style={{
            width: '50vw',
            padding: '10px',
            marginLeft: '20px',
          }}
          multiline
          maxRows={10}
          InputProps={{
            disableUnderline: true,
          }}
        />
        <Button
          style={{
            backgroundColor: 'crimson',
            borderRadius: '500px',
            width: '100px',
            boxShadow: '2px 5px 20px black',
            color: 'lightblue',
          }}
          onClick={sendData}
        >
          Send
        </Button>
      </div>
    </>
  );
};
