<template>
  <Header></Header>
  <SideNav></SideNav>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import Header from './components/Header.vue'
import SideNav from './components/SideNav.vue'

export default {
  name: 'App',
  components: {
    Header,
    SideNav
  }
}
</script>