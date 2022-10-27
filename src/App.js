import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage.js'
import NavigationBar from './Components/NavigationBar.js'
import ProjectsPage from './Pages/ProjectsPage';
import SchoolPage from './Pages/SchoolPage';
import ExtraCurricularPage from './Pages/ExtraCurricularPage.js';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Switch>
        <Route exact path ="/">
          <HomePage/>
        </Route>
        <Route exact path ="/projects">
          <ProjectsPage/>
        </Route>
        <Route exact path ="/school">
          <SchoolPage/>
        </Route>
        <Route exact path ="/co-curriculars">
          <ExtraCurricularPage/>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
