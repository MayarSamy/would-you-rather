import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";


class NewQuestion extends Component {

  state = {
    toHome: false,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const optionOne = document.getElementById("OptionOne").value;
    const optionTwo = document.getElementById("OptionTwo").value;
    const { dispatch, authedUser } = this.props;
    dispatch(handleAddQuestion(optionOne, optionTwo, authedUser));
    this.setState(() => ({
      toHome: true,
    }))
  };

  render() {
    if (this.state.toHome === true) {
      return <Redirect to='/home' />
    }

    return (
      <div className="center ">
        <h3>Create New Question</h3>
        <h5>Would You Rather :</h5>

        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Option One *" id="OptionOne" />
          <p> OR </p>
          <input type="text" placeholder="Option Two *" id="OptionTwo" />
          <button className="btn">Add Question</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
