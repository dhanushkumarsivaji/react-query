import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { RQSuperHeroPage } from "./components/RQSuperHero.page";
import { ParallelQueries } from "./components/ParallelQueries.page";
import { DynamicParallel } from "./components/DynamicParallel.page";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-dynamic-parallel">RQ Dynamic Parallel</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route
            exact
            path="/rq-super-heroes/:heroId"
            render={() => <RQSuperHeroPage />}
          />
          <Route exact path="/super-heroes">
            <SuperHeroesPage />
          </Route>
          <Route exact path="/rq-super-heroes">
            <RQSuperHeroesPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/parallel-queries">
            <ParallelQueries />
          </Route>
          <Route exact path="/rq-dynamic-parallel">
            <DynamicParallel heroIds={[1,2]}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
