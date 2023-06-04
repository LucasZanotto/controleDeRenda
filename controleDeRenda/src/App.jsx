import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Tabelas from './pages/Tabelas';
import Criar from './pages/Criar';
import Painel from './pages/Painel';
import PainelDetail from './pages/TabelasDetail';

function App() {

  return (
      <Switch>
         <Route exact path="/">
        <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={ Home } />
        <Route exact path="/tabelas" component={ Tabelas } />
        <Route exact path="/criar" component={ Criar } />
        <Route exact path="/painel" component={ Painel } />
        <Route exact path="/painel/:id" component={ PainelDetail } />
      </Switch>
  )
}

export default App;