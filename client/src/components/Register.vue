<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            v-model="email"
            label="E-mail: "
          ></v-text-field>
          <v-text-field
            type="password"
            v-model="password"
            label="Password: "
          ></v-text-field>
          <div class="error" v-html="error">
          </div>
          <v-btn class="sign" @click="register">Register</v-btn>    
        </div>        
      </div>
    </v-flex>
  </v-layout>
  
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
       this.error = error.response.data.error
     }
    }
  }
}
</script>

<style scoped>
.error{
  color: white;
}
/* .toolbar__title{
  color: white;
} */
</style>
