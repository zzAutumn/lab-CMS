import Api from '@/services/Api'

/* export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
} */
export default {
  submit () {
    return Api().post('submit')
  }
}