import React, { Component } from "react";
import { connect } from "react-redux";
//import sortArray from './node_modules/sort-array/dist/index.mjs'


class LeaderBoard extends Component {
  render() {
    const { users } = this.props;
    //let sortedUseres = users.sort((a,b)=>{ a.score - b.score})
    console.log(users)
    return (
      <div>
        {users.map((user) => (
          <div className="question"  key= {user.id}>
            <div className="question-info">
              <p>{user.name}</p> &nbsp;
              <p>
                Answered Questions: {user.answered}
              </p>
              
              <p>
                Asked Questions: {user.asked}
              </p>
              <p>
                Score : {user.score}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {

  let userScores = Object.keys(users).map((user) => ({
    id: user,
    name : users[user].name,
    avatar: users[user].avatar,
    answered : Object.keys(users[user].answers).length,
    asked : users[user].questions.length,
    score : Object.keys(users[user].answers).length + users[user].questions.length,
  }))

userScores = userScores.sort((a, b) => (b.score > a.score) ? 1 : -1)
  return {
    users : userScores,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
