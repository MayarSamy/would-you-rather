import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionsList from "./QuestionsList";
import { setQuestionState } from "../actions/questionState";

class Home extends Component {
  handleChange = (e) => {
    this.props.dispatch(setQuestionState(e.target.id));
  };

  render() {
    return (
      <div>
        <h3 className="center">Your Timeline</h3>
        <nav className="nav">
          <ul>
            <li>
              <button id="false" onClick={this.handleChange}>
                {" "}
                UnAnswered Questions{" "}
              </button>
            </li>
            <li>
              <button id="true" onClick={this.handleChange}>
                {" "}
                Answered Questions{" "}
              </button>
            </li>
          </ul>
        </nav>

        {this.props.questionState === "true" && (
          <div>
            <h4 className="center">Answered</h4>
            <ul>
              {this.props.answeredQuestions.map((id) => (
                <li key={id}>
                  <QuestionsList id={id} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {this.props.questionState === "false" && (
          <div>
            <h4 className="center">UnAnswered</h4>
            <ul>
              {this.props.unAnsweredQuestions.map((id) => (
                <li key={id}>
                  <QuestionsList id={id} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, questionState }) {
  const answeredQuestions = Object.keys(questions).filter(
    (questionId) =>
      questions[questionId].optionOne.votes.includes(authedUser) ||
      questions[questionId].optionTwo.votes.includes(authedUser)
  ).sort((a,b) => questions[b].timestamp - questions[a].timestamp);

  const unAnsweredQuestions = Object.keys(questions).filter(
    (questionId) =>
      !questions[questionId].optionOne.votes.includes(authedUser) &&
      !questions[questionId].optionTwo.votes.includes(authedUser)
  ).sort((a,b) => questions[b].timestamp - questions[a].timestamp);
  return {
    answeredQuestions,
    unAnsweredQuestions,
    questionState,
  };
}

export default connect(mapStateToProps)(Home);
