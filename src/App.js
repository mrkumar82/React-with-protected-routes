import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import CardsPage from "./pages/CardsPage";
import ProtectedRoute from "./ProtectedRoute";
import useAuth from "./useAuth";

export default function App() {
  const [isAuth, login, logout] = useAuth(false);
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link> | <Link to="/account">Account</Link> |{" "}
        <Link to="/cards">Cards</Link>
        {isAuth ? (
          <button onClick={() => logout()}>Logout</button>
        ) : (
          <button onClick={() => login()}>Login</button>
        )}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cards" component={CardsPage} />
          <ProtectedRoute
            path="/account"
            component={AccountPage}
            auth={isAuth}
          />
        </Switch>
      </Router>
    </div>
  );
}
