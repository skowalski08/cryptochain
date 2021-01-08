const crypto = require('crypto')

const crypoHash = (...inputs) => {
  const hash = crypto.createHash('sha256')

  hash.update(inputs.sort().join(' '));

  //digest is a term in cryptography to represent the result of a hash, digest is in hex form
  return hash.digest('hex')
};

module.exports = crypoHash;
