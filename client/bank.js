import React from "react";
import ReactDOM from "react-dom";

const fetch = require('node-fetch');

class Bank extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        transactions: [],
      }

    }

    componentDidMount(){
      const {username} = this.state
      const appThis = this; //appThis is the app

      fetch(`/users/${this.props.id}/transactions`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        appThis.setState({
          transactions: data
        })
      })
      // grab all the transactions from the database and put them into the state object
    }

    render(){
      return(
        <div>
          <h3>Welcome {this.props.username},</h3>
          <h4>Your balance is ${this.props.balance}</h4>
          <button className="transfer">Transfer Money</button>
          <table>
            <thead>
              <tr>
                <th>Transaction Type</th>
                <th>Amount</th>
                <th>Running Balance</th>
              </tr>
            </thead>
            {this.state.transactions.map( (action) => {
              return(
                <tbody>
                  <tr>
                    <td>{action.type}</td>
                    <td>{action.amount}</td>
                    <td>{action.balance}</td>
                  </tr>
                </tbody>
              )
            })}
          </table>
        </div>
      )
    }
};


export default Bank;
