import '../styles/styles.scss';
import Home from './Pages/Home';
import Form from './Pages/Form';
import CoursesGrid from './Organisms/CoursesGrid';
import Course from './Pages/Course';
import MainMenu from './Organisms/MainMenu';
import Historial from './Pages/Historial';
import Users from './Pages/Users';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact > 
          <Home /> 
        </Route>
        <Route path="/courses/:id" component={ Course } />
        <Route path="/courses" component={ CoursesGrid } />
        <Route path="/historial/:param" component={ Historial } />
        <Route path="/form" exact component={ () => <Form name="Test"/>} />
        <Route path="/users" component={ Users } />

        
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

