const server = require('../server.js')

const getUserId = function(username, callback) {
  server.db.query(`SELECT * FROM users WHERE name="${username}"`, function(error, results) {
    if(error) {
      callback(error)
    } else {
      callback(results)
    }
  })
};

const getUserTransactions = function(userId, callback) {
  server.db.query(`SELECT * FROM transactions WHERE firstUserId=${userId}`, function(error, results) {
    if(error) {
      callback(error)
    } else {
      callback(results)
    }
  })
}

const transferUpdate = function(userId, userId2, value, balance, cBack) {
  //controllers.transferUpdate(username, receiver, amount, balance, cback)

  // insert into entry with transactions
  // then update balance table
  server.db.query(`INSERT INTO transactions (firstUserId, secondUserId, type, amount, balance) VALUES (${userId}, ${userId2}, "transfer",
   ${value}, ${balance})`, function(error, results) {
     if(error) {
       cBack(error)
     } else {
       cBack(results)
     }
   })

//   UPDATE [LOW_PRIORITY] [IGNORE] table_name
// SET
//     column_name1 = expr1,
//     column_name2 = expr2,
//     ...
// [WHERE
//     condition];
}

module.exports.getUserId = getUserId
module.exports.getUserTransactions = getUserTransactions
module.exports.transferUpdate = transferUpdate
