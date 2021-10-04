import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
