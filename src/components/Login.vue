<template>


    <div id="login">

      <div v-if="auth_token">
        Authenticated with {{auth_token}}
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
  import config from '../config'

  export default {
    name: 'login',
    data () {
      return {
        auth_token: this.$route.query.auth_token,
        saml_start_url: config.backend_url + '/sessions/saml_start?frontend_url=' + encodeURIComponent(window.location.href)
      }
    },
    mounted: function () {
      this.verifyAuthToken()
    },
    methods: {
      verifyAuthToken () {
        // verify auth_token, push user + token to local storage

        console.log('Verifying auth token: ' + this.authToken)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
