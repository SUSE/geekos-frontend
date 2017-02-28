<template>

  <div id="team">

    <h2>{{team.name}}</h2>


    <h3>Team members</h3>
    <div id="team_members">
      <template v-for="geeko in team.members">
        <geekocard :geeko="geeko"></geekocard>
      </template>
    </div>

    <template v-if="team.children && team.children.length">
      <h3>Sub-teams</h3>
      <div id="sub_teams">
        <template v-for="team in team.children">
          <teamcard :team="team"></teamcard>
        </template>
      </div>
    </template>

  </div>
</template>


<script>
  import config from '../config'
  import GeekoCard from './GeekoCard'
  import TeamCard from './TeamCard'

  export default {
    name: 'team',
    components: {
      geekocard: GeekoCard,
      teamcard: TeamCard
    },
    props: {
      teamid: {
        type: Number,
        required: true
      }
    },
    data () {
      return {
        team: {}
      }
    },
    activated: function () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        var component = this
        this.axios.get(config.backend_url + '/api/teams/' + this.teamid)
          .then(function (response) {
            component.team = response.data.org_unit
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #team {
    text-align: center;
  }

  #team_members {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  #sub_teams {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>
