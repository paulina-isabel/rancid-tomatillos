import './NavBar.css'
import header from '../../images/header.png'
import popcorn from '../../images/popcorn.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='header' style={{backgroundColor: 'black'}}>
      <div className='login'>
        <img src={popcorn} className='popcorn' alt='popcorn user icon'/>Welcome, tomatilloer!
      </div>
      <Link to="/">
        <img src={header} className='header' name='header' alt='header'/>
      </Link>
    </div>
  )
}

export default NavBar