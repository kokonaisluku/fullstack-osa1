// Tehtävä 1.10

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyvä: 0,
            neutraali: 0,
            huono: 0
        }}
        render() {
            return (
                    <div>
                    <h1>anna palautetta</h1>
                    <Button that={this} arvosana="hyvä" />
                    <Button that={this} arvosana="neutraali" />
                    <Button that={this} arvosana="huono" />
                    <h1>statistiikka</h1>
                    <Statistics that={this} />
                    </div>
            )
        }}

const Statistic = (props) => {
    return (
            <div>{props.mitä} {props.paljonko}</div>
    )}

const Statistics = (props) => {
    let summat = (props.that.state["hyvä"]+props.that.state["neutraali"]+props.that.state["huono"]);
    if ( summat === 0 ){
        return (
                <div>ei yhtään palautetta annettu</div>)}
    let average1 = (props.that.state["hyvä"]-props.that.state["huono"])/
        (props.that.state["hyvä"]+props.that.state["neutraali"]+props.that.state["huono"]);
    let positiivisia = 100 * props.that.state["hyvä"]/
        (props.that.state["hyvä"]+props.that.state["neutraali"]+props.that.state["huono"]);
    return (
            <div>
            <Statistic mitä="hyvä" paljonko={props.that.state["hyvä"]} />
            <Statistic mitä="neutraali" paljonko={props.that.state["neutraali"]} />
            <Statistic mitä="huono" paljonko={props.that.state["huono"]} />
            <Statistic mitä="keskiarvo" paljonko={average1.toPrecision(1)} />
            <Statistic mitä="positiivisia" paljonko={positiivisia.toPrecision(3)+" %"} />
            </div>
    )}

const Button = (props) => {
    return (
            <button onClick={() => {
                props.that.setState(
                    {[props.arvosana]: (props.that.state[props.arvosana]+1)})}
									 }>{props.arvosana} </button>
	 );
}

ReactDOM.render(<App />, document.getElementById('root'));

