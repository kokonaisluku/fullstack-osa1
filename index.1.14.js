// Tehtävä 1.14* Anekdootit osa3

import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            pisteet: [0, 0, 0, 0, 0, 0]
        }
    }

    render() {
        return (
                <div>
                {this.props.anecdotes[this.state.selected]}
                <div>has {this.state.pisteet[this.state.selected]} votes
            </div>
                <VoteButton that={this} />
                <Button that={this} />
                <MostVotes that={this} />
                </div>
        )
    }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
/*
                const kopio = {Object.assign({},that.state.pisteet)}
*/
const VoteButton = (props) => {
    return (
            <button onClick={() => {
                let copy = [];
                for (var i = 0, len = props.that.state.pisteet.length; i < len; i++) {
                    copy[i] = props.that.state.pisteet[i];
                }
                copy[props.that.state.selected]++;
                props.that.setState({pisteet: copy})}
                            }>vote
        </button>
    );
}

const Button = (props) => {
    return (
            <button onClick={() => {
                props.that.setState(
                    {selected: (Math.floor(Math.random()*props.that.props.anecdotes.length))})}
                            }>next anecdote
        </button>
    );
}

const MostVotes = (props) => {
    let maxvotes = 0 ; // Math.max(props.that.state.pisteet);
    let maxind = 0;
    for (let i = 0;i<props.that.state.pisteet.length;i++){
        if (props.that.state.pisteet[i]>maxvotes){
            maxvotes = props.that.state.pisteet[i];
            maxind = i;};
    };
    return (
            <div>
            <h3>anecdote with most votes</h3>
            <div>{props.that.props.anecdotes[maxind]}</div>
            <div>has {maxvotes} votes</div>
            </div>
    )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
