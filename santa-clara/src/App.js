import './App.css';
import { Route } from "wouter";
import Navi from '../src/Components/Navigation/Navi';
import Homepage from './Components/Homepage/Homepage';
import Plataforma from './Components/Pages/Plataforma/Plataforma';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navi/>

        <Route path="/" component={Homepage}/>
          </header>
          <Route path="/plataforma" component={Plataforma}/>

    </div>
  );
}

export default App;
