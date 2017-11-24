<template>
  <div id="app">
    <DiscordSwirl/>
  </div>
</template>

<script>
import DiscordSwirl from './components/DiscordSwirl'

export default {
  name: 'app',
  components: {
    DiscordSwirl
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
