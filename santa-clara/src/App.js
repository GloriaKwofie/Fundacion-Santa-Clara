import './App.css';
import Navi from '../src/Components/Navigation/Navi';
import Homepage from './Components/Homepage/Homepage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navi/>
        <Homepage/>
      </header>
    </div>
  );
}

export default App;
