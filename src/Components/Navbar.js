import './Navbar.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Virus} from '../svg/virus.svg';
import {ReactComponent as Hamburger} from '../svg/hamburger.svg';
import {ReactComponent as Cross} from '../svg/cross.svg';
import Sidebar from './Sidebar';

const Navbar = () => {
    const [burger, setBurger] = useState(false)

    const handleClick = () => {
        setBurger(!burger)
    }

    return(
        <>
        <header className='header-nav'>
        <nav>
            <div className='nav-icon'><Link to='/'><Virus/></Link></div>
            <div className='nav-right'>
            <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public' style={{color: '#24252a', textDecoration: 'none'}}>protect</a>
            <Link to='/info' style={{color: '#24252a', textDecoration: 'none'}}>info</Link>
            <a href='https://twitter.com/SebastianRot24' style={{color: '#24252a', textDecoration: 'none'}}>author</a>
            </div>
            <div className='nav-burger' onClick={handleClick}>
                {burger ? <Cross/> : <Hamburger/>}
            </div>
        </nav>
        </header>
        {burger ? <Sidebar/> : null}
        </>
    )
}

export default Navbar;