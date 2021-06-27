import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotesPage from './components/pages/NotesPage';
import SingleNotePage from './components/pages/SingleNotePage';
import {createMemoryHistory } from "history";

function App() {
  return (
    <Router history={createMemoryHistory({ initialEntries: ['/'] })}>
      <Switch>
          <Route path="/" exact>
            <NotesPage />
          </Route>
          <Route path="/note">
            <SingleNotePage />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
