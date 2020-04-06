const defaultState = {
    question: '',
    score: 0,
    category: '',
    pointValue: 0,
    solution: '',
    answeredQuestions: []
}

const jeopardy = (state = defaultState, action) => {
    switch(action.type) {
        case 'GET_QUESTION':
            const newQuestionState = {
                question: action.question.question,
                pointValue: action.question.value,
                category: action.question.category && action.question.category.title | '',
                solution: action.question.answer
            }
            return Object.assign({}, state, newQuestionState)
            case 'ANSWERED_QUESTION':
                const answeredQuestionState = {
                question: action.question,
                pointValue: action.pointValue,
                category: action.category,
                solution: action.solution,
                answer: action.answer,
                previousScore: action.previousScore,
                newScore: action.newScore
                }
                state.answeredQuestions.push(answeredQuestionState)
                return Object.assign({}, state)
            default:
                return state
    }
}

export { jeopardy, defaultState }