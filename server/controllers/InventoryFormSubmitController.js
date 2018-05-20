'use strict'

const Inventory = require('../models/inventory')

exports.create_a_form = function (req, res) {
  let newForm = new Inventory({
    name: req.body.name,
    category: req.body.category,
    brand: req.body.brand,
    amountUnit: req.body.amountUnit,
    amount: req.body.amount,
    provider: req.body.provider,
    specification: req.body.specification,
    stockout: req.body.stockout,
    depositCondition: req.body.depositCondition,
    depositPlace: req.body.depositPlace,
    goodsNum: req.body.goodsNum,
    expirationTime: req.body.date,
    invoiceNum: req.body.invoiceNum,
    description: req.body.description
  })
  newForm.save(function (err, form) {
    if (err) {
      res.send(err)
    } else {
      console.log('create form successfully')
      res.send(form)
    }
  })
}
