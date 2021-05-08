import './Sidebar.css';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return(
        <section className='section-sidebar'>
            <div className='div-sidebar'><Link to='/' className='text-sidebar'>Home</Link></div>
            <div className='div-sidebar'><a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public' className='text-sidebar'>Protect</a></div>
            <div className='div-sidebar'><Link to='/info' className='text-sidebar'>Info</Link></div>
            <div className='div-sidebar'><a href='https://www.instagram.com/rot_sebastian/' className='text-sidebar'>Author</a></div>
        </section>
    )
}

export default Sidebar;