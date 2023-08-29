import './NavBar.css'
import header from '../images/header.png'
import popcorn from '../images/popcorn.png'

const NavBar = () => {
  return (
    <div style={{backgroundColor: 'black'}}>
      <div className='login'>
        <img src={popcorn} className='popcorn' alt='popcorn user icon'/>Welcome, tomatilloer!
      </div>
      <img src={header} name='header' alt='header'/>
    </div>
  )
}

export default NavBar