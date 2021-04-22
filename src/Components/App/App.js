import { useEffect, useState } from 'react'
import './App.css';
import CardDisplay from '../CardDisplay/CardDisplay.js'
import { Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage.js'

function App() {


  // const [inspirational, setInspirational] = useState()
  // const [leadership, setLeadership] = useState()
  // const [hope, setHope] = useState()
  const [favorites, setFavorites] = useState([])


  
  // useEffect(() => {
  //   fetch('https://favqs.com/api/quotes/?filter=inspirational&type=tag', {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'Token 8bc7dfa7e20dffcf95c9191267966f40'    
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => setInspirational(data.quotes))
  // },[])

  // useEffect(() => {
  //   fetch('https://favqs.com/api/quotes/?filter=leadership&type=tag', {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'Token 8bc7dfa7e20dffcf95c9191267966f40'    
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => setLeadership(data.quotes))
  // },[])
  const addToFavorites = (newFavorite) => {
    // if(!favorites.find(favorite => favorite.id === newFavorite)) {
      setFavorites([...favorites, newFavorite])
      console.log([...favorites, newFavorite])
    // }
  }


  return (
    <>
     
     
     <Route exact path='/' render={() => <HomePage/>}/>
     <Route exact path='/hope' render={() => <CardDisplay quoteType='hope' addToFavorites={addToFavorites}/>}/>
     <Route exact path='/leadership' render={() => <CardDisplay quoteType='leadership' addToFavorites={addToFavorites}/>}/>
     <Route exact path='/inspirational' render={() => <CardDisplay quoteType='inspirational' addToFavorites={addToFavorites}/>}/>
     <Route exact path='/laughs' render={() => <CardDisplay quoteType='funny' addToFavorites={addToFavorites}/>}/>
     
    {/* {leadership && <CardDisplay quoteList={leadership} />} */}
    </>
  );
}

export default App;
