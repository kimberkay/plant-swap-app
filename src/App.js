import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Details from './pages/details/Details'

//styles
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="background-image"></div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
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