import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Recipe from "./Recipe";

const Router = () => (
    
  <BrowserRouter>
    <Switch>
    <div>
      <Route path="/" component={App} exact />
      <Route path="/recipe/:id" component={Recipe} />
    </div>
    </Switch>
  </BrowserRouter>

);

export default Router;