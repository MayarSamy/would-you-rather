function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function formatQuestion({ optionOne, optionTwo, authedUser }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author: authedUser,
    optionOne: {
      votes: [],
      text: optionOne,
    },
    optionTwo: {
      votes: [],
      text: optionTwo,
    },
  };
}

export default formatQuestion;
