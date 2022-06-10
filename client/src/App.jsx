import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.scss';
import Hero from "./components/Hero/Hero";
import Main from "./pages/Main/Main"

function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/:category" component={Main} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
