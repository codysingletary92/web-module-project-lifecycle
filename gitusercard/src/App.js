import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios'

import Card from './components/Card'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      gitInfo: [],
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/bigknell')
          .then( res => {
              this.setState({gitInfo:res.data})
          })
          .catch( err => console.log('ERROR: '+err))

         
  }
  
  render(){
    console.log(this.state.gitInfo)
    return (
      <div className='App'>
        <h1>
          Github User API
        </h1>
        <div className='cardHolder'>
          <Card data={this.state.gitInfo}/>
        </div>
        
      </div>
    )
  }

}

export default App;
