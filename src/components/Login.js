import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    authedUser: "",
    toPage : false,
  };
  

  handleChange = (e) => {
    const authedUser = e.target.value;
    this.setState(() => ({
      authedUser,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { authedUser } = this.state;
    if(authedUser === ''){
      alert('choose user name')
    }else {
      const { dispatch } = this.props;
      dispatch(setAuthedUser(authedUser));
      this.setState(() => ({
        toPage: true,
      }));
    }
    
  };

  render() {
    const {from} = this.props.location.state || {from: {pathname: "/home"}}
    if (this.state.toPage === true) {
      return <Redirect to={from} />;
    }
    return (
      <div>
        <h1 className="center ">Login</h1>
        <form className="center " onSubmit={this.handleSubmit}>
          <select name="users" id="users" onChange={this.handleChange}>
            <option defaultValue="selected">choose your user name</option>

            {this.props.usersId.map((user) => (
              <option key={user} value={user}>
                {this.props.users[user].name}
              </option>
            ))}
          </select>

          <button className="btn">Login</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    usersId: Object.keys(users),
    users: users,
  };
}

export default connect(mapStateToProps)(Login);
