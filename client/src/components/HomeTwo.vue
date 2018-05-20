<template>
  <sidebar></sidebar>
</template>

<script>
import SideBar from './SideBar.vue'

export default {
  components: {
   sidebar: SideBar
  },
  data () {
      return {
        
      }
    }
}
</script>

<style scoped>
.sideBar {
  position: fixed;
  margin-top: 60px;
}
</style>
