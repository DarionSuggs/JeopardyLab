import React, { Component } from 'react'

class Display extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const question = this.props.question
        const category = this.props.category
        const pv = this.props.pv

    return (
        <div>
            <div>
                YOUR SCORE: {this.props.score}
            </div>
            <div>
                {question}
            </div>
            <div>
                {category}
            </div>
            <div>
                {pv}
            </div>
            <div>
                ANSWER THIS
                <form onSubmit={this.props.handleAnswer}>
                    <input onChange={this.props.handleChange} name='answer' />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
    }
}

export default(Display)