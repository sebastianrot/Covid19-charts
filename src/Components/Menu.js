import './Menu.css';
import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {ReactComponent as DiseaseSvg} from '../svg/disease.svg';
import {ReactComponent as VaccinSvg} from '../svg/syringe.svg';
import {ReactComponent as DeadSvg} from '../svg/dead.svg';

const Menu = () => {

    const [value, setValue] = React.useState(0);
    let history = useHistory();

    const redirect = (path) => {
        history.push(path)
    }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <section className='section-menu'>
            <div className='tabs-menu'>
            <Paper square>
                <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                >
                <Tab icon={<DiseaseSvg/>} onClick={() => redirect('/')}/>
                <Tab icon={<DeadSvg/>} onClick={() => redirect('/deaths')}/>
                <Tab icon={<VaccinSvg/>} onClick={() => redirect('/vaccine')}/>
                </Tabs>
            </Paper>
            </div>
            <div className='phone-menu'>
            <Link to='/'><DiseaseSvg/></Link>
            <Link to='/deaths'><DeadSvg/></Link>
            <Link to='/vaccine'><VaccinSvg/></Link>
            </div>
        </section>
    )  
}

export default Menu