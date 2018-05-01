/* J.Kyronaho anekdootit osa 1, t12 - 14 */
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: new Array(anecdotes.length).fill(0),
      isoin: 0
    }
   this.uusi_tila = this.uusi_tila.bind(this)
   this.uusi_vote = this.uusi_vote.bind(this)
  }

  uusi_tila() {
    this.setState({ selected: Math.floor(Math.random() * (anecdotes.length))})
  }

  uusi_vote() {
    let update = false
    let i_votes = this.state.pisteet[this.state.isoin]
    let ind = this.state.isoin
    const kopio = [...this.state.pisteet]
    kopio[this.state.selected] += 1
    this.setState({pisteet: kopio})
    kopio.forEach(function(item, index) {
      console.log("index: ", index)
      if ((item > i_votes)||((item === i_votes)&&(index < ind))) {
        console.log("asettaa (pist. index, vanha): ", item, index, ind)
        ind = index;
        update = true
      }
    }); 
    if (update) {
      this.setState({isoin: ind});
    }
  }

  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}<br></br> 
        has {this.state.pisteet[this.state.selected]} votes
        <br></br> 
        <button onClick={this.uusi_vote}>
          vote
        </button> 
        <button onClick={this.uusi_tila}>
          next anecdote
        </button> 
        <h3>anecdote with most votes:</h3>
        {this.props.anecdotes[this.state.isoin]}<br></br> 
        has {this.state.pisteet[this.state.isoin]} votes
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

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)