'use strict'

module.exports = function (app) {
  let inventoryList = require('../controllers/InventoryFormSubmitController')

  /**
   * 创建一条提交记录
   */
  app.route('/inventory/create')
    .post(inventoryList.create_a_form)

  app.route('/inventory/test')
    .post(function (req, res) {
      res.send('hahah...')
    })
}
