const uuid = require('uuid/v1');

class Transaction {
  constructor({ senderWallet, recipient, amount }) {
    this.id = uuid();
    this.outputMap = {};
  }
}

module.exports = Transaction;
