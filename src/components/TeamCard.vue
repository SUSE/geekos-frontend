<template>

  <div class="team_card">

    <router-link :to="{ name: 'team', params: { teamid: team.id} }">
      <div class="flip-container search-result" ontouchstart="this.classList.toggle('hover');">
        <div class="front">
          <img class="result-image" :src="avatar" width="160">
          <div class="result-content">
            <b>{{ team.name }}</b>
          </div>
        </div>
      </div>
    </router-link>
  </div>

</template>


<script>

  export default {
    name: 'teamcard',
    props: {
      team: {
        type: Object,
        required: true
      }
    },
    computed: {
      avatar: function () {
        if (this.team.img === 'http://imagebin.suse.de/2562/img') {
        // default team logo
          return require('assets/team_default_avatar.jpg')
        } else {
          return this.team.img
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

   a, a:visited, a:active {
     text-decoration: none;
     color: rgb(51, 51, 51);
   }


</style>
