<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-link to="/login" target="_blank">Login</router-link>
    <router-view></router-view>
    <HelloWorld ref="hello" msg="Welcome to Your Vue.js App"/>
    <First counter=2> </First>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import First from './components/First.vue'
import {EventBus} from "@/event-bus";
import router from './router'


export default {
  name: 'app'
  , router
  , components: {
    First,
    HelloWorld
  }
  , mounted() {
    EventBus.$on("com.thinkman.thinkutils.hello.dataChanged", ({data}) => {
      // this.msg = data
      this.$refs.hello.update(data)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
