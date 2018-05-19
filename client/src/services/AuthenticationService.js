import Api from '@/services/Api'

export default {
  /* register (credentials) {
    return Api().post('register', credentials)
  } */
  register () {
    return Api().post('register')
  }
}

/*
AuthenticationService.register({
  email: 'testing@gmail.com',
  password: '123456'
})
*/
