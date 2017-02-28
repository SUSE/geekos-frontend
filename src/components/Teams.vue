<template>

  <div id="teams">

    <h2>SUSE Teams</h2>

    <template v-if="root_team">

      <h3><router-link :to="{ name: 'team', params: { teamid: root_team.id} }">SUSE R&D</router-link></h3>

      <h3>Groups</h3>
    <template v-for="group in root_team.children">

      <h4><router-link :to="{ name: 'team', params: { teamid: group.id} }">{{group.name}}</router-link></h4>

    </template>

    </template>

  </div>
</template>


<script>
  import config from '../config'

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
      this.axios.get(config.backend_url + '/api/teams/root')
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
