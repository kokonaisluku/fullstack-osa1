// Tehtävä 1.8:

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
        }
    }

const Statistic = (props) => {
    return (
				<div>{props.mitä} {props.paljonko}</div>
    )}

const Statistics = (props) => {
	 let jakaja = Math.max(1,(props.that.state["hyvä"]+props.that.state["neutraali"]+props.that.state["huono"]));
    let average1 = (props.that.state["hyvä"]-props.that.state["huono"])/jakaja;
    let positiivisia = 100 * props.that.state["hyvä"]/jakaja;
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
//    console.log("props:",props);
// En ole alla olevaan tyytyväinen. Olisin halunnut dynaamisesti ohjata laskurin kasvatusta.
    return (
            <button onClick={() => {
					 switch (props.arvosana) {
						  case "hyvä":
                    props.that.setState(
								{hyvä: (props.that.state[props.arvosana]+1)})
						  break;
						  case "neutraali":
                    props.that.setState(
								{neutraali: (props.that.state[props.arvosana]+1)})
						  break;
						  case "huono":
                    props.that.setState(
								{huono: (props.that.state[props.arvosana]+1)})
						  break;
						  default: break;
					 }}}> {props.arvosana} </button>
	 );
}

ReactDOM.render(<App />, document.getElementById('root'));

