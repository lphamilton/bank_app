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

module.exports.getUserId = getUserId
module.exports.getUserTransactions = getUserTransactions
