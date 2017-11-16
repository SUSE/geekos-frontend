<template>

  <div id="teams">

    <h2>SUSE Teams</h2>

    <template v-if="root_team">

      <h3>SUSE R&amp;D</h3>
      <div class="flex-center">
        <teamcard :team="root_team"></teamcard>
      </div>

      <h3>Groups</h3>
      <div class="flex-center">
        <template v-for="group in root_team.children">
          <teamcard :team="group"></teamcard>
        </template>
      </div>

    </template>

  </div>
</template>


<script>
  import config from '../config'
  import TeamCard from './TeamCard'

  export default {
    name: 'teams',
    components: {
      teamcard: TeamCard
    },
    data () {
      return {
        root_team: null
      }
    },
    methods: {},
    mounted: function () {
      var component = this
      this.axios.get(config.backend_url + '/api/teams/root')
        .then(function (response) {
          component.root_team = response.data.org_unit
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
