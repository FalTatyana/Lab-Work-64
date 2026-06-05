import './Header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header container'>
                <div className="headerLogo">
                    <Link className='logo' to={'/'}><i className="bi bi-feather"></i> My Blog</Link>
                </div>
                <div className="navigator">
                    <NavLink className='navLink' to={'/'}>Home</NavLink>
                    <NavLink className='navLink' to={'/posts/add'}>Add</NavLink>
                    <NavLink className='navLink' to={'/about'}>About</NavLink>
                    <NavLink className='navLink' to={'/contacts'}>Contacts</NavLink>
                </div>
        </header>
    )
}

export default Header