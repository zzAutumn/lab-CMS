
module.exports = {
  async submit (req, res) {
    try {
      res.send('test....')
    } catch (err) {
      res.status(400).send({
        error: 'error.....'
      })
    }
  }
}
