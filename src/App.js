import { Redirect, Route, Switch } from "react-router-dom";
import Customer from "./component/customer";
import Movies from "./component/movies";
import NavBar from "./component/navBar";
import Rental from "./component/rental";
import NotFound from "./component/common/notFound";
import MovieForm from "./component/movieForm";
import LoginForm from "./component/login";
import "./App.css";
import Register from "./component/register";

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
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={Register} />
          <Redirect from="/" exact to="/movies" />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </main>
  );
}

export default App;
