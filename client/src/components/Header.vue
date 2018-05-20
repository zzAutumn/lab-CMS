<template>
  <v-toolbar fixed class="light-blue" dark>
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        v-on:click="navigateTo({name: 'root'})">
        lab-CMS        
      </span>
    </v-toolbar-title>
   
      <v-menu offset-y v-if="$store.state.isUserLoggedIn">
        <v-btn slot="activator" class="btn-box" color="blue lighten3">Browse</v-btn>
        <v-list>
          <v-list-tile v-for="(item, index) in items" :key="index" @click="">
            <v-list-tile-title
              v-on:click="navigateTo({name: item.title})"
            >
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
 
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"             
        dark 
        flat 
        router to="register">
        Sign Up
      </v-btn>

      <v-btn 
        v-if="!$store.state.isUserLoggedIn"            
        dark 
        flat 
        router to="login">
          Log In
      </v-btn>

      <v-btn 
        v-if="$store.state.isUserLoggedIn"            
        dark 
        flat 
        v-on:click="logout">
          Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'inventory' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ],
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken',null)
      this.$store.dispatch('setUser',null)  
      this.$router.push({name: 'root'})
    }
  }
}
</script>

<style scoped>
.home{
  cursor: pointer;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: cubic-bezier(0.895, 0.03, 0.685, 0.22);
}
.home:hover{
  background: rgba(20, 250,250, 0.1)
}
.btn-box{
  background: bottom;
}
</style>