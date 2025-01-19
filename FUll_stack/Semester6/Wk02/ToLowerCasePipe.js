const { Transform } = require('stream');

class ToLowerCasePipe extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toLowerCase());
  }
}

module.exports = { ToLowerCasePipe };