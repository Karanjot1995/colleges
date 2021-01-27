import React, { Component } from 'react'
import './App.css';
import './css/tile.css';
import './css/home.css';
import Home from './components/Home'

class App extends Component {
  myRef = React.createRef()

  state = {
    allColleges:[],
    colleges: [],
    start:0,
    end:10,
  }


  componentDidMount() {
    this.getData()
  }



  getData = () => {
    fetch(`${ process.env.PUBLIC_URL }/colleges.json`
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(res => { return res.json() })
      .then(data => {
        this.setState({
          allColleges: data.colleges,
          colleges: data.colleges.slice(0,10)
        })
      });

  }


  onScroll = () => {
    const { start, end } = this.state

    let element = document.getElementsByClassName('App')[0]
    if (element.scrollTop + element.clientHeight === element.scrollHeight) {
      this.setState({
        start: start + 10,
        end: end + 10
      })
      this.appendData(start + 10, end + 10)
    }

  }

  appendData(start, end) {
    let { allColleges, colleges } = this.state
    let addTen = allColleges.slice(start, end)
    this.setState({
      colleges: [...colleges, ...addTen]
    })
  }

  render(){
    const {colleges} = this.state
    
    return (
      <div className="App" ref={this.myRef} onScroll={this.onScroll} style={{
        height: '100vh',
        overflow: 'scroll',
      }} >
        <div className="app-home">
          {colleges.length > 0 ?<Home colleges={colleges} />:''}
        </div>
      </div>
    );
  }
}

export default App;
