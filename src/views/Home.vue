<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
     <b-button variant="success" @click="ok">Button</b-button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  methods: {
    ok() { 
    }
  }
}
</script>
