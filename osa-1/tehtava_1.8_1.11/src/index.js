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
  const setToValue = (newValue) => () =>  {
    switch(newValue) {
      case 'hyvä':
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
  const Statistic = (nName, stat) => {
   if (nName == 'positiivisia') {
    return (<tr><td>{nName}:</td> <td>{Math.round(stat*10)/10} %</td></tr>)
   }
   return (<tr><td>{nName}:</td> <td>{Math.round(stat*10)/10}</td></tr>)
  }

  const Statistics = () => {
    if (this.state.hyva + this.state.neutraali + this.state.huono == 0) {
      return (
        <div>
          <h1>statistiikka</h1>
          <p> ei yhtään palautetta annettu</p>
        </div>
      )
    }
    else {
      return(
        <div>
          <h1>statistiikka</h1>
          <table>
            {Statistic('hyvä', this.state.hyva)}
            {Statistic('neutraali', this.state.neutraali)}
            {Statistic('huono',  this.state.huono)}
            {Statistic('keskiarvo',  keskiarvo())}
            {Statistic('positiivisia',  positiivisia())}
          </table>        
        </div>
      )
    }
  }

  const Button = (buttonName) => {
    return (<button onClick={setToValue(buttonName)}>{buttonName}</button>)
  }

  const positiivisia = () => {
    let ret = this.state.hyva + this.state.huono + this.state.neutraali
    if (ret === 0) {
      return 0
    }
    else {
      return (this.state.hyva * 100 / ret)
    }
  }
  const keskiarvo = () => {
    let summa = this.state.hyva - this.state.huono
    let lukumaara = this.state.hyva + this.state.huono + this.state.neutraali

    if (lukumaara > 0) {
      return (summa/lukumaara)
    }
    else {
      return (0)
    }
  }

  return (
    <div>
      <h1>anna palautetta</h1>
        {Button('hyvä')}
        {Button('neutraali')}
        {Button('huono')}
        {Statistics()}    
    </div>
  )
}
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

 
  
