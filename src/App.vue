<template>
  <div id="app">
    <GithubCorner/>
    <DiscordSwirl/>
  </div>
</template>

<script>
import DiscordSwirl from './components/DiscordSwirl.vue'
import GithubCorner from './components/GithubCorner.vue'

export default {
  name: 'app',
  components: {
    DiscordSwirl, GithubCorner
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
