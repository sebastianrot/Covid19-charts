import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import Pages from './Pages';

function App() {
  return (
    <Router>
        <Navbar/>
        <Pages/>
        <Footer/>
    </Router>
  );
}

export default App;
