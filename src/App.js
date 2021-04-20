import "./App.css";
import Login from "./pages/login/login";
import Author from './pages/author/author'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/author" component={Author}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
