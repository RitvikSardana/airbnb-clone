import Home from './Components/Home/Home'
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SearchPage from './Components/SearchPage/SearchPage';

import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

function App() {
  return (
    <div className="app">

      <Router>
        <Header/>

        {/* Switch checks the path we are at */}
        <Switch>
        
          <Route exact path = '/'>
            <Home />
          </Route>

          <Route path = '/search'>
            <SearchPage />
          </Route>

        </Switch>

        <Footer />
      </Router>

      {/* {Blueprint of our clone} */}
      {/* {Home} */}
          {/* {Header} */}

          {/* {Banner} */}
              {/* {Search bar} */}
              
          {/* {Cards} */}
          
          {/* {Footer} */}

      {/* {SearchPage} */}
    </div>
  );
}

export default App;
