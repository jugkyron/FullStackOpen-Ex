import React from 'react'

const Osa = ({osa}) => {
  return (
    <div>
      <p>{osa.nimi} {osa.tehtavia}</p>
   </div>
  )
}
const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>

const Sisalto = (props) => { 
  const osat = props.kurssi.osat
  const result = osat.map(osa_ => <Osa key={osa_.id} osa={osa_} />)
  return(
    <div>
     {result} 
    </div>
  )
}
const Yhteensa = (props) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const result = props.kurssi.osat.map(osa_ => osa_.tehtavia).reduce(reducer)
  /* console.log(result) */
  return(
    <div>
      <p>yhteensä {result} tehtävää</p>
    </div>
  )
}
const Kurssi = ({ kurssi }) => {
  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto kurssi={kurssi} />
      <Yhteensa kurssi={kurssi} />
    </div>
  )
}

export default Kurssi
