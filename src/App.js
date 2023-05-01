import React, { useState} from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.get(`https://basicdeployment.onrender.com/${phoneNumber}`);
    setData(response.data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    setData(null);
  }
};

  return (
    <>
      <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {data ? (
        <div>
          <p>Name: {data[0].name}</p>
          <p>Device Id : {data[0].device_id}</p>
        </div>
      ): (
        <p>No data to display.</p>
      )}
    </>
  );
}

export default App;
