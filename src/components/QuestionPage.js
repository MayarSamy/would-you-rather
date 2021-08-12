import React, { Component } from "react";
import { connect } from "react-redux";
import {handleAnswerQuestion} from "../actions/questions"
import { setQuestionState } from "../actions/questionState";


class QuestionPage extends Component {
  handleSubmit = (e) => {
    let answer = ""
    if (document.getElementById("optionOne").checked) {
      answer = "optionOne"
    } 
    else if (document.getElementById("optionTwo").checked){
      answer= "optionTwo"
    } else {
      alert("You have to choose an option")
    }

    const { dispatch, authedUser, id} = this.props;
    dispatch(handleAnswerQuestion({authedUser , id , answer}))
    dispatch(setQuestionState("true"));
  };

  render() {
    const { question, authedUser } = this.props;
    console.log(question);
    return (
      <div>
        {this.props.questionState === "true" && (
          <div>
            <h3>Would You Rather</h3>
            <p> {question.optionOne.text} </p>
            {question.optionOne.votes.includes(authedUser) && (
              <span>selected</span>
            )}
            <p> {question.optionTwo.text} </p>
            {question.optionTwo.votes.includes(authedUser) && (
              <span>selected</span>
            )}
          </div>
        )}

        {this.props.questionState === "false" && (
          <div>
            <h3>Would You Rather</h3>
            <form onSubmit={this.handleSubmit}>
              <input
                type="radio"
                id="optionOne"
                value={question.optionOne.text}
              />
              <label>{question.optionOne.text}</label>
              <br />
              <p> OR </p>
              <input
                type="radio"
                id="optionTwo"
                value={question.optionTwo.text}
              />
              <label>{question.optionTwo.text}</label> <br />
              <button> Submit Answer</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps({ authedUser, questions, questionState }, props) {
  const { id } = props.match.params;

  return {
    id: id,
    question: questions[id],
    authedUser: authedUser,
    questionState,
  };
}

export default connect(mapStateToProps)(QuestionPage);
