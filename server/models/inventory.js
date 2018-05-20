'user strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
  //  试剂名称
  name: {
    type: String,
    required: true
  },
  //  试剂分类
  category: {
    type: String,
    required: true
  },
  //  试剂品牌
  brand: {
    type: String
  },
  //  数量单位
  amountUnit: {
    type: String
  },
  //  数量
  amount: {
    type: Number
  },
  //  供应商
  provider: {
    type: String
  },
  //  规格
  specification: {
    type: String
  },
  //  缺货---false->不缺 true->缺
  stockout: {
    type: Boolean
  },
  //  存放条件
  depositCondition: {
    type: String
  },
  //  存放地
  depositPlace: {
    type: String
  },
  //  货号
  goodsNum: {
    type: String
  },
  //  过期时间
  expirationTime: {
    type: Date
  },
  //  发票号
  invoiceNum: {
    type: String
  },
  //  描述
  description: {
    type: String
  }

})

module.exports = mongoose.model('inventory', inventorySchema)
