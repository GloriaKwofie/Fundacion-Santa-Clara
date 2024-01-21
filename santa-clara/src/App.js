import './App.css';
import { Route } from "wouter";
import Navi from '../src/Components/Navigation/Navi';
import Homepage from './Components/Homepage/Homepage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navi/>

        <Route path="/" component={Homepage}/>
          </header>
    </div>
  );
}

export default App;
