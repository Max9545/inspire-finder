import { useEffect, useState } from 'react'
import './App.css';
import CardDisplay from '../CardDisplay/CardDisplay.js'
import Header from '../Header/Header.js'
import HomePage from '../HomePage/HomePage.js'

function App() {


  const [inspirational, setInspirational] = useState()
  const [leadership, setLeadership] = useState()

  useEffect(() => {
    fetch('https://favqs.com/api/quotes/?filter=inspirational&type=tag', {
      method: 'GET',
      headers: {
        'Authorization': 'Token 8bc7dfa7e20dffcf95c9191267966f40'    
      }
    })
    .then(res => res.json())
    .then(data => setInspirational(data.quotes))
  },[])

  useEffect(() => {
    fetch('https://favqs.com/api/quotes/?filter=leadership&type=tag', {
      method: 'GET',
      headers: {
        'Authorization': 'Token 8bc7dfa7e20dffcf95c9191267966f40'    
      }
    })
    .then(res => res.json())
    .then(data => setLeadership(data.quotes))
  },[])

  return (
    <>
     <Header/>
     <HomePage/>
    {/* {leadership && <CardDisplay quoteList={leadership} />} */}
    </>
  );
}

export default App;
