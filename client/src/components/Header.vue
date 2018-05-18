<template>
  <v-toolbar fixed class="light-blue" dark>
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        v-on:click="navigateTo({name: 'root'})">
        lab-CMS        
      </span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark >
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn dark flat router
      to="register">
        Sign Up
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
        <v-btn dark flat router
        to="login">
          Log In
        </v-btn>
      </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
</style>