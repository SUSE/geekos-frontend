<template>


    <div class="login">

      <template v-if="this.user">
        Welcome
        <router-link :to="{ name: 'geeko', params: { workforceid: user.workforceid} }">{{user.fullname}}</router-link>
        <a href="#" v-on:click='logOut'><i class="fa fa-sign-out gray" aria-hidden="true"></i></a>
        <router-link :to="{ name: 'geeko', params: { workforceid: user.workforceid} }">
          <img class="user-login-image" :src="avatar">
        </router-link>
      </template>

      <template v-else>
        <form id="login-form" data-type="html" action="https://login.microfocus.com/nidp/idff/sso?id=6&amp;sid=0" accept-charset="UTF-8" method="post">

        <input type="text" size="15" name="Ecom_User_ID" value="" placeholder="suse.com username..." autofocus="autofocus" tabindex="1" required="required" aria-label="Enter your suse.com username..." />
        <input type="password" size="15" name="Ecom_Password" value="" placeholder="password..." tabindex="2" required="required" aria-label="Enter your password..." />

        <input type="hidden" name="option" id="option" value="credential" />
        <input type="hidden" name="target" id="target" :value="this.saml_start_url" />
        <button id='login-button' tabindex='3' type='submit'>login</button>

        </form>

      </template>

    </div>

</template>


<script>
  import config from '../config'
  import * as helpers from '../helpers'

  export default {
    name: 'login',
    data () {
      return {
        saml_start_url: config.backend_url + '/sessions/saml_start?frontend_url=' + encodeURIComponent(window.location.href),
        user: undefined
      }
    },
    mounted: function () {
      if (this.$route.query.auth_token) {
        localStorage.auth_token = this.$route.query.auth_token
      }
      if (localStorage.auth_token) { this.verifyAuthToken() }
    },
    computed: {
      avatar: function () {
        return helpers.avatarImage(this.user.image, this.user.email)
      }
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
      vertical-align: top;
      margin-left: 15px;
  }

  .login {
    height: 75px;
  }

  .login input {
    width: 160px;
    box-sizing: border-box;
    border: 2px solid #dcdddf;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    padding: 5px 10px 5px 10px;
  }

  #login-button {
    background-color: #02d35f;
    box-sizing: border-box;
    border: 2px solid #dcdddf;
    border-radius: 4px;
    font-size: 16px;
    padding: 5px 10px 5px 10px;
  }

</style>
