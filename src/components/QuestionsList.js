import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class QuestionsList extends Component {
  state = {
    id: "",
    toQuestion: false,
  };
  handleSubmit = (e) => {
    this.setState(() => ({
      id: e.target.id,
      toQuestion: true,
    }));
  };

  render() {
    const { question, author, avatar } = this.props;
    const { id, toQuestion } = this.state;
    if (toQuestion === true) {
      return <Redirect to={`/questions/${id}`} />;
    }
    return (
      <div className="answered">
        <div className="question">
          <div className="question-info center">
            <h5 className="center"> Would You Rather </h5>
            <img src= {avatar} alt={author}></img>
            <p> {question.optionOne.text} </p>
            <p> OR </p>
            <p>{question.optionTwo.text} </p>
            <button
              className="center"
              onClick={this.handleSubmit}
              id={question.id}
            >
              {" "}
              View Question
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  return {
    question:
      question /*.sort((a,b) => questions[b].timestamp - questions[a].timestamp)*/,
    author: users[question.author].name,
    avatar: users[question.author].avatar,
  };
}

export default connect(mapStateToProps)(QuestionsList);
