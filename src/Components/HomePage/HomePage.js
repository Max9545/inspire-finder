import './HomePage.css'
import { ReactComponent as LeaderShip } from "../../Images/LeaderShip.svg";
import { ReactComponent as Micropohone } from "../../Images/Microphone.svg";
import Header from '../Header/Header.js'
import { Link } from 'react-router-dom'


function HomePage() {
  return (
      <div className='home-page'>
        <Header/> 
        <section className='select-catagory' data-cy='select-catagory'>
          <Link to='/hope'className='catagory hope' data-cy='catagory-hope'>
            <h2 className='hope-title' data-cy='hope-title'>Hope</h2>
          </Link>
          <Link to='leadership'className='catagory leadership' data-cy='catagory-leadership'>
            <LeaderShip className='leadership-logo'/>
            <h2 className='leadership-title' data-cy='leadership-title'>Leadership</h2>
          </Link>
          <Link to='inspirational' className='catagory inspirational' data-cy='catagory-inspirational'>
            <h2 className='inspirational-title' data-cy='inspirational-title'>Inspirational ☆ ☆</h2>
          </Link>
          <Link to='laughs' className='catagory laughs' data-cy='catagory-laughs'>
            <h2 className='laughs-title' data-cy='laughs-title'>Laughs<Micropohone className='microphone'/></h2>
            
          </Link>
        </section>
        <button>Favorites</button> 
      </div>
  )
}

export default HomePage