import { Redirect, Route, Switch } from "react-router-dom";
import Customer from "./component/customer";
import Movies from "./component/movies";
import NavBar from "./component/navBar";
import Rental from "./component/rental";
import NotFound from "./component/common/notFound";
import MovieForm from "./component/movieForm";
import "./App.css";

function App() {
  return (
    <main className="container">
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customer" component={Customer} />
          <Route path="/rental" component={Rental} />
          <Redirect from="/" exact to="/movies" />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </main>
  );
}

export default App;
