<template>
  <v-navigation-drawer :mini-variant.sync="mini" 
    v-model="drawer" 
    class="sideBar"
    stateless hide-overlay>
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img v-bind:src="Url" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.native.stop="mini = !mini">
              <ArrowLeftBoldIcon/>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile v-for="item in items" :key="item.title" @click="">
        <v-list-tile-action>
          <DnaIcon/>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import DnaIcon from "vue-material-design-icons/dna.vue"
import ArrowLeftBoldIcon from "vue-material-design-icons/arrow-left-bold.vue"



export default {
  components: {
    DnaIcon,
    ArrowLeftBoldIcon
  },
  data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        mini: true,
        right: null,
        Url: require('@/assets/avatar.jpg')
      }
    }
}
</script>

<style scoped>
.sideBar {
  position: fixed;
  margin-top: 60px;
}
.material-design-icon{
  font-size: 22px;
}
.list__tile__content{
  padding-top: 10px;
}
</style>
