import './styles/styles.scss';
import Banner from './Banner';
import Form from './Form';
import CoursesGrid from './CoursesGrid';
import Course from './Course';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainMenu from './MainMenu';
import Historial from './Historial';

function App() {
  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact > 
          <Banner /> 
        </Route>
        <Route path="/cursos/:id" component={ Course } />
        <Route path="/cursos" component={ CoursesGrid } />
        <Route path="/historial/:perreo" component={ Historial } />
        <Route path="/form" exact component={ () => <Form name="Test"/>} />
        
        <Route>
          <div className="ed-grid">
            <h1>Error 404</h1>
            <span>Page not found :c</span>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// Rules JSX

// 1. All tags must be closed
// 2. Components must return only one parent element.
// 3. Fragments can be useful when you want to return two or more elements.
// 4. img always must be closed, unlike html
// 5. class => className
// 6. for => htmlFor

