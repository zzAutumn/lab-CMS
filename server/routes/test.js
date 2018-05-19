module.exports = function (app) {
  app.get('test', function (req, res) {
    res.send('test')
  })

  app.post('/test1', function (req, res) {
    res.send(req.body)
  })

  app.route('/test2')
    .get(function (req, res) {
      res.send('lsflsdj...')
    })
  app.route('/submit')
    .post(function (req, res) {
      console.log('hahahah....')
      res.send('test....hahahahha')
    })
}
