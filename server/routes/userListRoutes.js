'use strict'

module.exports = function (app) {
  let userList = require('../controllers/UserListController')

  /* app.route('/users')
    .get(userList.list_all_users)
    .post(userList.create_a_user) */

  app.route('users/:userId')
    .get(userList.read_a_user)

  /* 查询所有用户 */
  app.route('/users/findAllUsers')
    .get(userList.find_all_user)

  /**
   * 创建一个新用户
   */
  app.route('/register')
    .post(userList.create_a_user)

  /**
   * 验证一个用户 login
   */
  app.route('/login')
    .post(userList.login)

  /* app.route('/register')
    .post(function (req, res) {
      res.send(req.body)
    }) */
  app.route('/users/test')
    .post(function (req, res) {
      res.send(req.body)
    })
}
