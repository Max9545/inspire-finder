import { useEffect, useState } from 'react'
import './App.css';

function App() {


  const [inspirational, setInspirational] = useState()


  useEffect(() => {
    fetch('https://favqs.com/api/quotes/?filter=inspirational&type=tag', {
      method: 'GET',
      headers: {
        'Authorization': 'Token 8bc7dfa7e20dffcf95c9191267966f40'    
      }
    })
    .then(res => res.json())
    .then(data => setInspirational(data))
  },[])

  return (
    <p>HI</p>
  );
}

export default App;
