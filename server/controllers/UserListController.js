'use strict'

//  const mongoose = require('mongoose')
//  const User = mongoose.model('user')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

exports.list_all_users = function (req, res) {
  User.find({}, function (err, user) {
    if (err) {
      res.send(err)
    }
    return res.json(user)
  })
}

exports.create_a_user = function (req, res) {
  console.log(req.body)
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  newUser.save(function (err, user) {
    if (err) {
      res.send('err!!!!' + req.body)
    } else {
      console.log('create successfully...')
      res.json(user)
    }
  })
}

exports.read_a_user = function (req, res) {
  User.findById(req.params.userId, function (err, user) {
    if (err) {
      res.send(err)
    }
    res.json(user)
  })
}

exports.find_all_user = function (req, res) {
  User.find({})
    .exec(function (err, users) {
      if (err) {
        res.send(err)
      }
      res.json(users)
    })
}

exports.login = function (req, res, next) {
  const email = req.body.email
  const password = req.body.password
  User.find({
    email: email
  }).exec(function (err, user) {
    if (err) { return next(err) }
    if (!user) {
      return res.status(403).send({
        error: 'user do not exit.The login information was incorrect'
      })
    }
    const isPasswordValid = password === user[0].password
    console.log(isPasswordValid)
    if (!isPasswordValid) {
      return res.status(403).send({
        error: 'password wrong.The login information was incorrect'
      })
    }
    const userJson = user[0].toJSON()
    res.send({
      user: userJson,
      token: jwtSignUser(userJson)
    })
  })

  /* if (!user) {
    return res.status(403).send({
      error: 'The login information was incorrect'
    })
  }
  const isPasswordValid = password === user.password
  if (!isPasswordValid) {
    return res.status(403).send({
      error: 'The login information was incorrect'

    })
  }
  const userJson = user.toJSON()
  res.send({
    user: userJson
  })
} catch (err) {
  res.status(500).send({
    error: 'an error has occuered trying to log in'
  })
} */
}
