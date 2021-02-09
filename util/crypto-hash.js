const crypto = require('crypto')

const cryptoHash = (...inputs) => {
  const hash = crypto.createHash('sha256')

  hash.update(inputs.map(input => JSON.stringify(input)).sort().join(' '));

  //digest is a term in cryptography to represent the result of a hash, digest is in hex form
  return hash.digest('hex')
};

module.exports = cryptoHash;
