<template>
  <div id="app">
    <v-app>
      <page-header></page-header>
      <main>
        <v-container fluid>
          <router-view/>
        </v-container>
      </main>      
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader: PageHeader
  }
}
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  margin-top: 20px;
}
.navigation-drawer{
  margin-top: 60px;
}
</style>
