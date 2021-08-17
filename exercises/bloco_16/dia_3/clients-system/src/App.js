import Home from './components/Home'
import Login from './components/Login.jsx'
import Cadastrados from './components/Cadastrados'
import Cadastrar from './components/Cadastrar'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastros" component={Cadastrados} />
        <Route path="/cadastrar" component={Cadastrar} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
