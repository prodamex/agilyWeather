import React, { useState } from 'react';

import {
    Switch,
    Route,
  } from "react-router-dom";
  import Search from './components/Search'
  import Home from './components/Home'
  
  export default function App() {
    return (
        <div>
          <Switch>
            <Route path="/weather">
              <Home />
            </Route>
            <Route path="/">
              <Search />
            </Route>
          </Switch>
        </div>
    );
  }
  
  