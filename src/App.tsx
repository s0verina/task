import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, MenuList, MenuItem } from "@material-ui/core";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import CV from "./pages/CV";
import './style.css';

const App: React.FC = () => {
  return (
    <Container fixed>
      <Router>
        <MenuList style={{ display: "flex" }}>
          <MenuItem component={Link} to="/">Registration</MenuItem>
          <MenuItem component={Link} to="/login">Login</MenuItem>
          <MenuItem component={Link} to="/cv">CV</MenuItem>
        </MenuList>
        
        <Switch>
          <Route exact path="/" component={Registration} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cv" component={CV} />
          <Route component={Login} />
        </Switch>
      </Router>
    </Container>
    
  );
}

export { App };

