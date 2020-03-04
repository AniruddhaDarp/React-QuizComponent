import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {quiz_position: 1}
  }

  render() {
    let questions = quizData.quiz_questions
    let first = questions[0].instruction_text
    return (
      <div class='QuizQuestion'>
        {first}
      </div>
    )
  }
}

export default Quiz
