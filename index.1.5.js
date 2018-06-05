import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const kurssi = {
		nimi: 'Half Stack -sovelluskehitys',
		osat: [
			 {
				  nimi: 'Reactin perusteet',
				  tehtavia: 10
			 },
			 {
				  nimi: 'Tiedonvälitys propseilla',
				  tehtavia: 7
			 },
			 {
				  nimi: 'Komponenttien tila',
				  tehtavia: 14
			 }
		]}
  return (
    <div>
      <Otsikko kurssi={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
    </div>
  )
}

const Otsikko = (props) => {
	 return(
				<h1>{props.kurssi}</h1>
	 )
}

const Sisalto = (props) => {
// Kommentti
	 return(
				<div>
				<Osa osa={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia} />
				<Osa osa={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia} />
				<Osa osa={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia} />
				</div>
	 )
}
const Osa = (props) => {
	 return(
		 		<p>{props.osa} {props.tehtavia}</p>
	 )
}

const Yhteensa = (props) => {
	 return(
				<p>yhteensä {props.osat[0].tehtavia +
								 props.osat[1].tehtavia +
								 props.osat[2].tehtavia} tehtävää</p>)



}

ReactDOM.render(<App />, document.getElementById('root'));

