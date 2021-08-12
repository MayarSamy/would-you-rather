import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Home from "./Home";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import Nav from "./Nav";
import ProtectedRoute from "../protectedRoute"

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
            <div>
            <Nav />
            <div>
              <Route path="/" exact component={Login} />
              <ProtectedRoute path="/home" exact component={Home} />
              <ProtectedRoute path="/question/:id" exact component={QuestionPage} />
              <ProtectedRoute path="/add" exact component={NewQuestion} />
              <ProtectedRoute path="/leaderboard" exact component={LeaderBoard} />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}
export default connect()(App);
