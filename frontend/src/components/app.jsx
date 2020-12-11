import React, { useReducer, useState, useEffect } from "react";
// import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch, Route, Link } from 'react-router-dom';
import Survey from "./surveys/survey";
import ResultsContainer from "./results/results_container";
import Welcome from "./welcome/welcome";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/survey' component={Survey} />
        <Route exact path='/survey/results' component={ResultsContainer} />
      </Switch>
      <Route exact path='/' component={Welcome} />
    </div>
  );
};

export default App;
