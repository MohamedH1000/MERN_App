import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import store from './app/store.jsx';
import { getPosts } from './actions/posts.jsx';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

store.dispatch(getPosts())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/:currentId' element={<App />}/>
        </Routes>
      </Provider>
    </Router>
  </React.Fragment>,
)
