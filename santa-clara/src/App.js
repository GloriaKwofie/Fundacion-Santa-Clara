import "./App.css";
import { Route } from "wouter";
import Navi from "../src/Components/Navigation/Navi";
import Homepage from "./Components/Homepage/Homepage";
import Plataforma from "./Components/Pages/Plataforma/Plataforma";
import NewsPage from "./Components/Noticias/NewsPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navi />

        <Route path="/" component={Homepage} />
      </header>
      <Route path="/plataforma" component={Plataforma} />
      <Route path="/news" component={NewsPage} />
    </div>
  );
}

export default App;
