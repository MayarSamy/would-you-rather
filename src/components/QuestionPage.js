import React, { Component } from "react";
import { connect } from "react-redux";
import {handleAnswerQuestion} from "../actions/questions"
import { setQuestionState } from "../actions/questionState";
import { Redirect } from "react-router-dom";

class QuestionPage extends Component {
  handleSubmit = () => {
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
    const { questions, authedUser , usersLength, id} = this.props;
    const question = questions[id]
    if (!question) {
      return <Redirect to="/404"/>
    }
    else {
      const optionOnePercent = (question.optionOne.votes.length / usersLength) * 100
      const optionTwoPercent = (question.optionTwo.votes.length / usersLength) * 100
     
      return (
        <div>
          {this.props.questionState === "true" && (
            <div>
              <h3>Would You Rather</h3>
              <div>
              <span> {question.optionOne.text} </span> &nbsp;
              <span>{question.optionOne.votes.length}</span> &nbsp;
              <span>{optionOnePercent} %</span> &nbsp;
  
              {question.optionOne.votes.includes(authedUser) && (
                <span>selected</span>
              )}
              </div>
              <div>
              <span> {question.optionTwo.text} </span> &nbsp;
              <span>{question.optionTwo.votes.length}</span> &nbsp;
              <span>{optionTwoPercent} %</span> &nbsp;
              {question.optionTwo.votes.includes(authedUser) && (
                <span>selected</span>
              )}
              </div>
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
}
function mapStateToProps({ authedUser, questions, questionState , users}, props) {
  const { id } = props.match.params;

  return {
    id: id,
    questions: questions,
    authedUser: authedUser,
    questionState,
    usersLength: Object.keys(users).length
  };
}

export default connect(mapStateToProps)(QuestionPage);
