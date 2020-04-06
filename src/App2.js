import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';


class Parent extends Component{
  state = {
    num: 1
}
render() {
    return (
        <div>
            sss
        </div>
    );
}
componentDidUpdate(prevProps, prevState) {
    console.log(this.state.num)
}
componentDidMount() {
    setTimeout(() => {
        console.log('timeout')
    })
    new Promise((resovle) => {
        console.log('before')
        resovle('then')
        console.log('after')
    }).then(res => {
        console.log(res)
    })
    let {num} = this.state
    this.setState({
        num: ++num
    }, () => {
        console.log('after setState')
    })
    console.log('---')
}
}

function App() {
  return (
   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Parent></Parent>
      </header>
    </div>
  );
}

export default App;

