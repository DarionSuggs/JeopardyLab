import request from 'superagent'

const getQuestionAction = (question) => ({
    type: 'GET_QUESTION',
    question
})

export const answeredQuestion = (question, previousScore, newScore) => dispatch => (
    dispatch ({
    type: 'ANSWERED_QUESTION',
    question,
    previousScore,
    newScore
    })
)

export const getQuestion = () => dispatch => {
    request
    .get('https://jservice.kenzie.academy/api/random-clue')
    .then((res) => {
        dispatch(getQuestionAction(res.body))
    })
    .catch((err) => {
        throw new err
    })
}