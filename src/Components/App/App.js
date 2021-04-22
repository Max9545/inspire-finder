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


  
 
  const addToFavorites = (newFavorite) => {
   
      
  
      if(!favorites.some(favorite => favorite.id === newFavorite.id)) {
        favorites.push(newFavorite)
        setFavorites(favorites)
        // setFavorites([...favorites, newFavorite]) why does this not work? some kind of background prevention from the API?
        console.log(favorites)
      }
    
  }



  return (
    <>
     
     
     <Route exact path='/' render={() => <HomePage/>}/>
     <Route exact path='/hope' render={() => <CardDisplay quoteType='hope' addToFavorites={addToFavorites}/>}/>
     <Route exact path='/leadership' render={() => <CardDisplay quoteType='leadership' addToFavorites={addToFavorites}/>}/>
     <Route exact path='/inspirational' render={() => <CardDisplay quoteType='inspirational' addToFavorites={addToFavorites}/>}/>
     <Route exact path='/laughs' render={() => <CardDisplay quoteType='funny' addToFavorites={addToFavorites}/>}/>
    </>
  );
}

export default App;
