import './App.css'
import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: []
    }

    for (let i = 1; i <= 60; i++) {
      this.state.items.push(i)
    }

    this.state.items = this.shuffle(this.state.items)
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
      <div class="container">
        {this.state.items.map(item => (
          <div>{item}</div>
        ))}
      </div>
    )
  }
}


export default App;
