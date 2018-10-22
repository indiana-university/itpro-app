import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import DepartmentContainer from './components/Department/Container';
import DepartmentsContainer from './components/Departments/Container';
import Home from './components/Home';
import Page from './components/layout/Page';
import ProfileContainer from './components/Profile/Container';
import SearchContainer from "./components/Search/Container";
import Signin from './components/Signin';
import UnitContainer from "./components/Unit/Container";
import UnitsContainer from "./components/UnitsContainer";

const App : React.SFC = () => (
  <Page>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/profiles/:id" component={ProfileContainer} /> 
      <Route path="/me" component={ProfileContainer} /> 
      <Route path="/search" component={SearchContainer} /> 
      <Route path="/departments/:id" component={DepartmentContainer} /> 
      <Route path="/departments" component={DepartmentsContainer} /> 
      <Route path="/units/:id" component={UnitContainer} /> 
      <Route path="/units" component={UnitsContainer} /> 
    </Switch>
  </Page>
)

export default App;
