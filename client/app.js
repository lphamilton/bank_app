import React from 'react';
import ReactDOM from 'react-dom';

import Bank from './bank'

const fetch = require('node-fetch');

class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        username: '',
        loggedIn: false,
        balance: 0,
        id: null,
      }
      this.handleUsernameChange = this.handleUsernameChange.bind(this)
      this.submitQuery = this.submitQuery.bind(this)
    }

    handleUsernameChange(event) {
      this.setState({
        username: event.target.value
      })
    }

    submitQuery(){
      console.log('this updated')
      // WHEN YOU SUBMIT YOU WILL CHANGE PAGES, AND SERVE UP ANOTHER COMPONENT
      // if the username was wrong, return an error according to what DB returned
      const {username} = this.state
      const appThis = this; //appThis is the app

      fetch(`/users/${username}`)
      .then(res => res.json())
      .then(data => {
        if(data.length > 0) { // the query was correct
          appThis.setState({
            loggedIn: true,
            balance: data[0].balance,
            username: data[0].name,
            id: data[0].id
          })
        }
      })
    }

    render(){
      const isLoggedIn = this.state.loggedIn

      if(!isLoggedIn) {
        return (
          <div>
            <h1>Banking App</h1>
            <input onChange={this.handleUsernameChange}></input>
            <button onClick={this.submitQuery}>Get Balance</button>
          </div>
        )
      } else {
        return <Bank submitQuery={this.submitQuery} balance={this.state.balance} id={this.state.id} username={this.state.username}></Bank>
      }
    }
};


export default App;
ReactDOM.render(<App />, document.getElementById("app"));
