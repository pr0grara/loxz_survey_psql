import React, { useReducer, useState, useEffect } from "react";
// import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch, Route, Link } from 'react-router-dom';
import QuestionIndexContainer from "./question/question_index";
import QuestionFactoryContainer from "./question/question_factory_container";
import SurveyContainer from "./surveys/survey_container";
import SurveyIndexContainer from "./surveys/survey_index_container";
import SurveyFactoryContainer from "./surveys/survey_factory_container";
import ResultsContainer from "./results/results_container";
import HomeContainer from './home/home_container';
import WelcomeContainer from "./welcome/welcome_container";

const App = () => {
  return (
    <div>
      <Route exact path='/' component={WelcomeContainer} />
      <Switch>
        <Route exact path='/home' component={HomeContainer} />
        <Route exact path='/questions' component={QuestionIndexContainer} />
        <Route exact path='/questions/new' component={QuestionFactoryContainer} />
        <Route exact path='/surveys' component={SurveyIndexContainer} />
        <Route exact path='/surveys/:id' component={SurveyContainer} />
        <Route exact path='/survey/new' component={SurveyFactoryContainer} />
        <Route exact path='/survey/results' component={ResultsContainer} />
      </Switch>
    </div>
  );
};

export default App;
