import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Info from './Components/Info';
import CardList from './Components/CardList';
import About from './Components/About';
import './Styles/main.scss';
import Types_Pok from './Components/PokemonTypes/Types_Pok';

export default function App() {

  return(
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={CardList} />
          <Route path="/info/:id" component={Info} />
          <Route path="/about" component={About} />
          <Route path="/type/:id" component={Types_Pok} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}