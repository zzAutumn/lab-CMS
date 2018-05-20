<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <form 
            name="tab-tracker-form"
            autocomplete="on"
          >
            <v-text-field
            v-model="name"
            label="Name: "
            :rules="nameRules"
          ></v-text-field>
            <v-text-field
            v-model="email"
            label="E-mail: "
            :rules="emailRules"
          ></v-text-field>
            <v-text-field
            type="password"
            v-model="password"
            label="Password: "
            autocomplete="new-password"
            :rules="passRules"
          ></v-text-field>
            <v-btn class="sign" @click="register">Register</v-btn>    
          </form>          
        </div>              
      </div>        
    </v-flex>
  </v-layout>
  
</template>

<script>
//  import AuthenticationService from '@/services/AuthenticationService'
import axios from 'axios'
import Api from '@/services/Api'

export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passRules: [
      v => !!v || 'Password is required',
      v => (v.length >=6 && v.length <=32) || `Password must be at least 6 characters and less than 32 characters
      Password must be contain ONLY the follow characters: lower case, upper case and numbers`
    ]
      
  }),
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
    
  register () {
    const postData = new URLSearchParams()
    postData.append('name', this.name);
    postData.append('email', this.email);
    postData.append('password', this.password);
    axios.post('http://localhost:8081/register', postData)
      .then(response => {
        if (response.status === 200) {
          //  console.log('ok....')
          const token = response.data.token
          this.$store.dispatch('setToken', token)
          this.$store.dispatch('setUser', response.data.user) 
        }
      })
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
