<template>

  <div id="geeko">

    <h2>Geeko {{workforceid}}</h2>

  </div>
</template>


<script>

  // http://localhost:3000/api/users/01377

  export default {
    name: 'geeko',
    data () {
      return {
        workforceid: this.$route.params.workforceid
      }
    },
    methods: {
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #geeko {
    text-align: center;
  }

</style>
