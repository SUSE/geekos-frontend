<template>

  <div id="teams">

    <h2>SUSE Teams</h2>

    <template v-if="root_team">
      <h3>SUSE R&D</h3>

      <h3>Groups</h3>
    <template v-for="group in root_team.children">

      <h4>{{group.name}}</h4>

    </template>

    </template>

  </div>
</template>


<script>

  // http://localhost:3000/api/teams/root
  // http://localhost:3000/api/teams/58b40f0a2fa1995f7cd0c572

  export default {
    name: 'teams',
    data () {
      return {
        root_team: null
      }
    },
    methods: {
    },
    mounted: function () {
      var component = this
      this.axios.get('http://localhost:3000/api/teams/root')
        .then(function (response) {
          component.root_team = response.data.org_unit
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #teams {
    text-align: center;
  }

</style>
