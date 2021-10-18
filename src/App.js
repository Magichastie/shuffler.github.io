import './App.css'
import React from 'react'
import { pulse } from 'react-animations'
import Radium, {StyleRoot} from 'radium'

const styles = {
  pulse: {
    animation: 'x 4s',
    animationName: Radium.keyframes(pulse, 'pulse')
  }
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      highlighted: 0
    }

    for (let i = 1; i <= 60; i++) {
      this.state.items.push(i)
    }

    this.state.items = this.shuffle(this.state.items)

    setTimeout(() => this.moveIt(1), 1000)
  }

  moveIt(next) {
    this.setState({...this.state, highlighted: next})
    setTimeout(() => this.moveIt(next + 1), 1000)
  }

  shuffle(arr) {
    let selected, swap

    for(let i = arr.length - 1; i > 0; i--) {
      selected = Math.floor(Math.random() * (i + 1))

      swap = arr[i]
      arr[i] = arr[selected]
      arr[selected] = swap
    }

    return arr
  }

  render() {
    return (
      <StyleRoot>
      <div class="container">
        {this.state.items.map(item => {
          if(this.state.highlighted === item) {
            return (
              <div key={item.toString()} class="highlighted">{item}</div>
              )
          }

            return (
            <div key={item.toString()} id={item.toString()}>{item}</div>
            )
        }
        )}
      </div>
      </StyleRoot>
    )
  }
}


export default App;
