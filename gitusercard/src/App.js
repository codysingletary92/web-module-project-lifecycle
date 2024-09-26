import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios'
// here
import Card from './components/Card'
import Search from './components/Search'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      gitInfo: [],
      searchInput: 'dustinmyers',
      formInput: '',
    }
  }

  onChange = event => {
    this.setState({
      formInput: event.target.value
    })
  }

  onClick = event => {
    console.log(this.state.searchInput)
    event.preventDefault();
    this.setState({
      searchInput: this.state.formInput
    })
    console.log(this.state.searchInput)
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.searchInput}`)
          .then( res => {
              this.setState({gitInfo:res.data})
              console.log(this.state.searchInput)
          })
          .catch( err => console.log('ERROR: '+err))
    
  }

  render(){
    console.log(this.state.searchInput)
    return (
      <div className='App'>
        <h1>
          Github User API
        </h1>
        <Search onChange={this.onChange} formInput={this.state.formInput} onClick={this.onClick}/>
        <div className='cardHolder'>
          <Card data={this.state.gitInfo}/>
          
        </div>
        
      </div>
    )
  }

}

export default App;
