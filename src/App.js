import './App.css'
import {Pages, Paths, RoutingWrapper} from "@/pages/routers";
import {
  Navigate,
  Route, Routes
} from 'react-router-dom';
import Guest from "@/layouts/Guest/index.jsx";
import React from "react";


function App() {
  const loggedIn = false;

  return (
    <div className={'App'} >
      <Guest>
        <Routes primary={false}>
          <Route path={Paths.Home} element={<RoutingWrapper component={Pages.Home} />} />
          {loggedIn ? (
            <Route path={Paths.Test} element={<RoutingWrapper component={Pages.Test}/>}/>
          ) : <Route path="*" element={<Navigate replace to="/"/>} />}
        </Routes>
      </Guest>
    </div>
  )
}

export default App
