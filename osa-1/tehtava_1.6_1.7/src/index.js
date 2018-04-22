/* Unicafe osa 1 ja osa 2 */
/* fso 2018 tehtavat 1.6 ja 1.7 */ 
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }
render() {
  const setToValue = (newValue) => () => { 
    switch(newValue) {
      case 'hyva':
        let hyva_kasvatettu = this.state.hyva + 1
        return (this.setState({ hyva: hyva_kasvatettu}))
      case 'neutraali':
        let neutraali_kasvatettu = this.state.neutraali + 1
        return (this.setState({ neutraali: neutraali_kasvatettu}))
      case 'huono':
        let huono_kasvatettu = this.state.huono + 1
        return (this.setState({ huono: huono_kasvatettu}))
      default:
    }
    
  }
  const positiivisia = () => {
    let ret = this.state.hyva + this.state.huono + this.state.neutraali
    if (ret === 0) {
      return 0
    }
    else {
      let pos = this.state.hyva * 100 / ret
      return (Math.round(pos*10)/10)
    }
  }
  const keskiarvo = () => {
    let summa = this.state.hyva - this.state.huono
    let lukumaara = this.state.hyva + this.state.huono + this.state.neutraali
    if (lukumaara > 0) {
      return (Math.round((summa/lukumaara)*10)/10)
    }
    else {
      return (0)
    }
  }
  return (
    <div>
      <h1>anna palautetta</h1>
      <button onClick={setToValue('hyva')}>hyvä</button>
      <button onClick={setToValue('neutraali')}>neutraali</button>
      <button onClick={setToValue('huono')}>huono</button>
      <h1>statistiikka</h1>
      <p>hyvä: {this.state.hyva}</p>
      <p>neutraali: {this.state.neutraali}</p>
      <p>huono: {this.state.huono} </p> 
      <p>keskiarvo: {keskiarvo()} </p> 
      <p>positiivisia: {positiivisia()} %</p> 
    </div>
  )
}
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

 
  
