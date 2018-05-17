<template>
  <div>
    <h1>Register</h1>
    <!--
      <p>
      <label for="username">name: </label>
      <input type="text" name="username" placeholder="name">
    </p>
    -->
    <p>
      <label for="email">email: </label>
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="email"
      />
    </p>
    <p>
      <label for="password">password: </label>
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="password"
      />
    </p>
    <div class="error">
      <button v-on:click="register">
          Register
      </button>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '', //  这里的数据双向绑定，对应template中的v-model
      password: '',
      error: null
    }
  },
  /* watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'hello world'
    }, 2000)
  }, */
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
     } catch (error) {
       this.error = error.response.data
     }
    }
  }
}
</script>

<style scoped>

</style>
