<template>

  <div id="geeko">

    <h2>{{geeko.fullname}}</h2>


  </div>
</template>


<script>
  import config from '../config'

  export default {
    name: 'geeko',
    data () {
      return {
        geeko: {},
        workforceid: this.$route.params.workforceid
      }
    },
    activated: function () {
      var component = this
      this.axios.get(config.backend_url + '/api/users/' + this.$route.params.workforceid)
        .then(function (response) {
          component.geeko = response.data.user
          console.log(response.data.user)
        })
        .catch(function (error) {
          console.log(error)
        })
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
