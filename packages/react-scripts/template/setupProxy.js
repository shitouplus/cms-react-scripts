import mocks from '@/mock/index.js'

module.exports = function(app) {
  for (let { url, data } of mocks) {
    app.all(url, function(req, res) {
      res.send(data)
    })
  }
};
