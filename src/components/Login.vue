<template>


    <div id="login">

      <div v-if="this.user">
        Welcome
        <router-link :to="{ name: 'geeko', params: { workforceid: user.workforceid} }">{{user.fullname}}</router-link>
        <a href="#" v-on:click='logOut'>Logout</a>

        <img class="user-login-image" :src="avatar">
      </div>

      <div v-else>
        <form id="login-form" data-type="html" class="margins-updown" action="https://login.microfocus.com/nidp/idff/sso?id=6&amp;sid=0" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Hc4w+2dSSHPOxQf25PB5GPtUEY8Y5UPtpPzseFQ6oxuTfQJaUIU+1E7MqhkutXn+doXaevFYy+iKbHyd1uQEVA==" />

        <input type="text" name="Ecom_User_ID" value="" class="form-control" placeholder="Enter your username..." autofocus="autofocus" tabindex="1" required="required" data-error-field="alert" aria-label="Enter your username..." />
        <input type="password" name="Ecom_Password" value="" class="form-control" placeholder="Enter your password..." tabindex="2" required="required" data-error-field="alert" aria-label="Enter your password..." />

        <input type="hidden" name="option" id="option" value="credential" />
        <input type="hidden" name="target" id="target" :value="this.saml_start_url" />
        <button class='router-link-active' id='login_button' tabindex='3' type='submit'>login</button>

        </form>

      </div>

    </div>

</template>


<script>
  import gravatar from 'gravatar'
  import config from '../config'

  export default {
    name: 'login',
    data () {
      return {
        saml_start_url: config.backend_url + '/sessions/saml_start?frontend_url=' + encodeURIComponent(window.location.href),
        user: undefined
      }
    },
    computed: {
      avatar: function () {
        if (this.user.picture === 'http://imagebin.suse.de/2554/img') {
          return gravatar.url(this.user.email, {s: '160', d: 'retro'})
        } else {
          return this.user.picture.replace('http://localhost:3000', config.backend_url)
        }
      }
    },
    mounted: function () {
      if (this.$route.query.auth_token) {
        localStorage.auth_token = this.$route.query.auth_token
      }
      this.verifyAuthToken()
    },
    methods: {
      verifyAuthToken () {
        // keeping self-reference for the promise
        var login = this
        this.axios.get(config.backend_url + '/api/users/verify_token', {
          params: {
            auth_token: localStorage.auth_token
          }
        })
        .then(function (response) {
          login.user = response.data.user
          console.log(JSON.stringify(login.user, null, 2))
        })
        .catch(function (error) {
          if (!error.response) {
            console.log(error)
          }
          localStorage.removeItem('auth_token')
        })
      },
      logOut () {
        this.user = undefined
        localStorage.removeItem('auth_token')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .user-login-image {
      max-width: 50px;
      border-radius: 50%;
  }

</style>
