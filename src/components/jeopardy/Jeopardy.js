import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as JeopardyActions from '../../actions'
import JeopardyService from "../../jeopardyService";
import Display from './display';

const cleanString = (string) => {
  return string.toUpperCase().replace(/[^0-9a-z]/gi, '')
}


class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      answer: ''
    };
  }

  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data,
        answer: ''
      });
    });
  }

  //when the component mounts, get the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAnswer = e => {
    e.preventDefault()
    let score = this.state.score
    const answer = cleanString(this.state.answer)
    const solution = cleanString(this.state.data.answer)
      if (answer === solution){
        score += this.props.pointValue
      } else {
        score -= this.props.pointValue
      }
      this.setState({ score, answer: '' })
      this.props.getQuestion();
  }

  //display the results on the screen
  render() {
    return (
      <div>
        <Display
        question={this.props.question}
        category={this.props.category}
        pv={this.props.pointValue}
        score={this.state.score}
        handleAnswer={this.handleAnswer}
        handleChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  question: state.question,
  score: state.score,
  category: state.category,
  pointValue: state.pointValue,
  solution: state.solution,
  answeredQuestions: state.answeredQuestions
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(JeopardyActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Jeopardy);
