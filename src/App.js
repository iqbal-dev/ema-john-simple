import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Manage from './components/Manage/Manage';
import NotFound from './components/NotFound/NotFound';
import ProductManage from './components/ProductManage/ProductManage';

function App() {
  return (
    <div>
      
      <Header></Header>
      <Router>
        <Switch>
          <Route  path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/manage">
              <Manage></Manage>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route  path="/product/:productKey">
            <ProductManage></ProductManage>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
