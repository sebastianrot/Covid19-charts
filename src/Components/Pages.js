import {Switch, Route} from 'react-router-dom';
import Content from './Content';
import Information from './Information';
import NotFound from './NotFound';

const Pages = () => {

    return(
       <Switch>
           <Route exact path='/' component={Content}/>
           <Route exact path='/deaths' component={Content}/>
           <Route exact path='/vaccine' component={Content}/>
           <Route path='/info' component={Information}/>
           <Route component={NotFound}/>
       </Switch>
    )
}

export default Pages;