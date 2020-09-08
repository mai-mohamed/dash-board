import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import CompanyView from "./Views/Company/Company";
import AgentView from "./Views/Agent/Agent"
 function CompanyRoutes() {
     
  return (
    <Router>
  
          <Route path="/agents" component={CompanyView} />
          <Route path="/add-company" component={AgentView}/> 
          <Route path="" component={AgentView}/> 

    </Router>
  );
}

export default CompanyRoutes;