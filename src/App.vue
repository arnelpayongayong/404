<template>
  <div id="app">
    <p class="header-title">404 Not Found</p>
    <router-view/>

    <footer class="footer">
        Arnel Joshua Payongayong @ DevChallenges.io
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  min-height: 100%;
  height: auto !important;
  height: 100%;
  width: 100%;
  margin: 0 auto -4em;
  color: #333333;  
}
.header-title{
  font-family: Inconsolata;
  font-style: normal;
  font-weight: bold;
}
.footer{
  margin-top: 10%;
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100vw;
  font-family: Inconsolata;
}


</style>
