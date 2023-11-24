import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import SaladsSoup from './components/SaladsSoup'
import BarnYard from './components/BarnYard'
import HenHouse from './components/HenHouse'
import FromSea from './components/FromSea'
import Biryani from './components/Biryani'
import FastFood from './components/FastFood'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={SaladsSoup} />
      <Route exact path="/barnyard" component={BarnYard} />
      <Route exact path="/henhouse" component={HenHouse} />
      <Route exact path="/fromSea" component={FromSea} />
      <Route exact path="/biryani" component={Biryani} />
      <Route exact path="/fastFood" component={FastFood} />
    </Switch>
  </BrowserRouter>
)

export default App