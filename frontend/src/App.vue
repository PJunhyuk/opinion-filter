<template>
  <div id="app">
    <!-- <img src="./assets/OPINION_logo_blue.png"> -->
    <router-view/>
  </div>
</template>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-92632505-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-92632505-2');
</script>

<script>
export default {
  name: 'App'
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
.main-logo {
  width: 250px;
}

.main h1, h2 {
  font-weight: normal;
}
.main h1 {
  color: #0e284b;
}
.main p {
  margin-top: -20px;
}

</style>
