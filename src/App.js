import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Details from './pages/details/Details'
import { Row, Col } from 'react-bootstrap'

//styles
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/about">
            <About />
          </Route>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App