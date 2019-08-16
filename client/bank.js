import React from "react";
import ReactDOM from "react-dom";

const fetch = require('node-fetch');

class Bank extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        transactions: [],
        transfering: false,
        transferAmount: 0,
        recipient: ''
      }
      this.handleTransfer = this.handleTransfer.bind(this)
      this.handleTransferSubmit = this.handleTransferSubmit.bind(this)
      this.renderTransferBox = this.renderTransferBox.bind(this)
      this.recipientChange = this.recipientChange.bind(this)
      this.transferAmountChange = this.transferAmountChange.bind(this)
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
          transactions: data.reverse()
        })
      })
      // grab all the transactions from the database and put them into the state object
    }

    handleTransfer(event) {
      // should open up an input box where to put client ID
      this.setState({
        transfering: true
      })
    }

    handleTransferSubmit(event){
      event.preventDefault()

      // will need to update database
      // grab the new transaction
      // update the table

      // balance: this.props.balance
      // /users/:userId/recipient/:recipientId/amount/:amount/:balance
      fetch(`/users/recipient/${this.state.recipient}/amount/${this.state.transferAmount}/${this.props.balance}`, { method: 'PUT'})
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

      this.props.submitQuery() // this will pull updated data from the database
    }

    transferAmountChange(event){
      console.log(event.target.value)
      this.setState({
        transferAmount: event.target.value
      })
    }

    recipientChange(event){
      this.setState({
        recipient: event.target.value
      })
    }

    renderTransferBox(){
      if(this.state.transfering) {
        return (
          <form type="submit" className="submit" onSubmit={this.handleTransferSubmit}>
            Amount Sending: <input onChange={this.transferAmountChange}></input>
            Account ID Of Recipient: <input onChange={this.recipientChange}></input>
            <button>Confirm Transfer</button>
          </form>
        )
      } else {
        return null
      }
    }

    render(){
      return(
        <div>
          <h3>Welcome {this.props.username},</h3>
          <h4>Your balance is ${this.props.balance}</h4>
          <button className="transfer" onClick={this.handleTransfer}>Transfer Money</button>
          {this.renderTransferBox()}
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
