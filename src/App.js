import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'
import Home from './Componenets/Home'
import About from './Componenets/About'
import Contact from './Componenets/Contact'
import NavBar from './Componenets/NavBar'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <NavBar/>
        <div className='App'>
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </Router>
      </header>
    </div>
  );
}

export default App;