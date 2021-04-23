import './Header.css'
import { ReactComponent as  Inspiration } from "../../Images/Inspiration.svg";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div  className='header-container' data-cy='header-container'>
      <Link className='title-to-home'to='/'>
        <h1 className='header-title' data-cy='header-title' >Inspire<br/>Finder</h1>
      </Link>
      <Link to='/favorites'> 
        <Inspiration className='app-logo'/>
      </Link>
    </div>
  )
}

export default Header