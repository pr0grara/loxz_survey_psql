import React, { useReducer, useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import QuestionIndexContainer from "./question/question_index";
import QuestionFactoryContainer from "./question/question_factory_container";
import SurveyContainer from "./surveys/survey_container";
import SurveyIndexContainer from "./surveys/survey_index_container";
import SurveyFactoryContainer from "./surveys/survey_factory_container";
import ResultsContainer from "./results/results_container";
import HomeContainer from './home/home_container';
import WelcomeContainer from "./welcome/welcome_container";
import NavBar from "./navbar/navbar";

const App = () => {
  return (
    <div id="app" className="row">
      <NavBar />
      <Route exact path='/' component={WelcomeContainer} />
      <Switch>
        <ProtectedRoute exact path='/home' component={HomeContainer} />
        <ProtectedRoute exact path='/questions' component={QuestionIndexContainer} />
        <ProtectedRoute exact path='/questions/new' component={QuestionFactoryContainer} />
        <ProtectedRoute exact path='/surveys' component={SurveyIndexContainer} />
        <ProtectedRoute exact path='/surveys/:id' component={SurveyContainer} />
        <ProtectedRoute exact path='/survey/new' component={SurveyFactoryContainer} />
        <ProtectedRoute exact path='/survey/results' component={ResultsContainer} />
      </Switch>
    </div>
  );
};

export default App;
