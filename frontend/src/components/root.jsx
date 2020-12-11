import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import axios from "axios"
import App from './app.jsx'


const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  )
};
// const Root = () => {
//   return (
//     <HashRouter>
//       <App />
//     </HashRouter>
//   )
// };

export default Root;