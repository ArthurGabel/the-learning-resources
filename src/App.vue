<template>
  <the-header title="RememberMe"></the-header>
  <the-resources></the-resources>
</template>

<script>
import theHeader from './components/layout/TheHeader.vue';
import theResources from './components/learning-resources/TheResources.vue'

export default {
  components: {
    theHeader,
    theResources
  },
  data() {
    return {
      storedResources: [
        {
          id: 'oficial-guide',
          title: 'Oficial Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org'
        }
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
