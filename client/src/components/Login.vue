<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>
        <v-card>
          <v-toolbar color="indigo" dark>
            <v-toolbar-title>Log In</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <span class="title">Personal Info</span>
            <v-text-field
              v-model="email"
              label="Email: "
              class="mt-3"
              required
            />
            <v-text-field
              type="password"
              v-model="password"
              label="Password: "
              class="mt-3"
              required
            />
            <small>*indicates required field</small>
            <div class="error" v-html="error"></div>
            <br>
            <v-btn class="sign" @click="login">Log In</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const postData = new URLSearchParams()
        postData.append('email', this.email)
        postData.append('password', this.password)
        axios.post('http://localhost:8081/login', postData)
          .then(response => {
          if (response.status === 200) {
          //  console.log(response.data.token)
          const token = response.data.token
          this.$store.dispatch('setToken', token)
          this.$store.dispatch('setUser', response.data.user)
           
        }
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
</style>