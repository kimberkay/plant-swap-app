import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Swaps from './pages/swaps/Swaps'
import Search from './pages/search/Search'

//styles
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/swaps/:id">
            <Swaps />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App