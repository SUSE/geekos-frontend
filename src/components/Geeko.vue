<template>

  <div id="geeko">

    <h2>{{geeko.fullname}}</h2>

    <img :src="avatar">

    <p><i>{{ geeko.title }}</i></p>
    <p v-if="geeko.email"><a :href="'mailto:' + geeko.email"><i class="email-icon fa fa-envelope-o fa-lg green"></i>{{geeko.email}}</a></p>
    <p v-if="geeko.phone"><i class="fa fa-phone fa-lg green"></i> {{ geeko.phone }}</p>


  </div>
</template>


<script>
  import config from '../config'
  import * as helpers from '../helpers'
  import TeamCard from './TeamCard'

  export default {
    name: 'geeko',
    components: {
      teamcard: TeamCard
    },
    data () {
      return {
        geeko: {}
      }
    },
    computed: {
      avatar: function () {
        return helpers.avatarImage(this.geeko.image, this.geeko.email)
      }
    },
    mounted: function () {
      this.loadUser(this.$route.params.workforceid)
    },
    methods: {
      loadUser: function (workforceid) {
        var component = this
        this.axios.get(config.backend_url + '/api/users/' + workforceid)
          .then(function (response) {
            component.geeko = response.data.user
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    watch: {
      '$route.params.workforceid' (newId, oldId) {
        if (newId) { this.loadUser(newId) }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #geeko {
    text-align: center;
  }

  .email-icon {
    margin-right: 5px;
  }

</style>
