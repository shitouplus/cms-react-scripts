const mocks = require('./mock')

module.exports = function(app) {
  for (let { url, data } of mocks) {
    app.all(url, function(req, res) {
      res.send(data)
    })
  }
};
