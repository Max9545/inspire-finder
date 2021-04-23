import './Header.css'
import { ReactComponent as  Inspiration } from "../../Images/Inspiration.svg";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Link to='/' className='header-container' data-cy='header-container'>
      <h1 className='header-title' data-cy='header-title' >Inspire<br/>Finder</h1>
      <Inspiration className='app-logo'/>
    </Link>
  )
}

export default Header