import React, { Component } from "react";
import { NavLink , Redirect} from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";


class Nav extends Component {
  handleSubmit = (e) => {
      const authedUser  = "";
      const { dispatch } = this.props;
      dispatch(setAuthedUser( authedUser ));
      
    //} 
  };

  render() {
    if(this.props.authedUser === ""){
      return <Redirect to="/" />;
    }
    return (
      
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/home" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" activeClassName="active">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" activeClassName="active">
              Leader Board
            </NavLink>
          </li>
          
          {this.props.user && <li>{this.props.user.name}</li>}

          {this.props.authedUser && (
            <li>
              <button onClick= {this.handleSubmit}>
              Logout
              </button>
            </li>
          )}

          
        </ul>
      </nav>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  return {
    user: users[authedUser],
    authedUser,
  };
}

export default connect(mapStateToProps)(Nav);
