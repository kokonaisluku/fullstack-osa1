// Tehtävä 1.7:

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyvä: 0,     
            neutraali: 0,
            huono: 0,
        }}
        render() {
            return (
                    <div>
                    <h1>anna palautetta</h1>
                    <button onClick={() => this.setState({hyvä: (this.state.hyvä+1)})}>hyvä</button>
                    <button onClick={() => this.setState({neutraali: (this.state.neutraali+1)})}>neutraali</button>
                    <button onClick={() => this.setState({huono: (this.state.huono+1)})}>huono</button>
                    <h1>statistiikka</h1>
                    <Sisalto arvosanat={this.state} />
                    </div>
            )
        }
    }

const Sisalto = (props) => {
    //    console.log("props",props);
	 let jakaja = Math.max(1,(props.arvosanat.hyvä+props.arvosanat.neutraali+props.arvosanat.huono));
	 let average1 = (props.arvosanat.hyvä-props.arvosanat.huono)/jakaja;
	 let positiivisia = 100 * (props.arvosanat.hyvä)/jakaja;
    return(
            <div>
            <Arvosana arvosana="hyvä" laskuri={props.arvosanat.hyvä} />
            <Arvosana arvosana="neutraali" laskuri={props.arvosanat.neutraali} />
            <Arvosana arvosana="huono" laskuri={props.arvosanat.huono} />
				<p>keskiarvo {average1.toPrecision(1)}</p>
				<p>positiivisia {positiivisia.toPrecision(3)} %</p>
            </div>
    )
}
const Arvosana = (props) => {
    //    console.log("props",props);
    return(
            <p>{props.arvosana} {props.laskuri}</p>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

