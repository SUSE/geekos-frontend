<template>
  <div id="app">

    <header class="header grid grid-pad">
      <div class="col-7-12">
        <router-link :to="{ name: 'root' }">
          <img width="540" height="100" src="./assets/suse_geekos.png" alt="Suse geekos"/>
        </router-link>
      </div>
      <div class="col-5-12">
        <ul class="nav">
          <li>
            <router-link :to="{ name: 'search' }">Search</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'teams' }">Teams</router-link>
          </li>
          <li><a href="http://floor.suse.de">Offices</a></li>
        </ul>
      </div>

    </header>


    <div class="content grid grid-pad">
      <div id="content" class="col-1-1">

        <transition name="fade">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>

      </div>
    </div>


    <footer class="footer grid grid-pad">
      <div class="col-1-1">
        SUSE Geeko Browser. <a href="https://hackweek.suse.com/15/projects/1868">Hackweek project</a>.
        Please report issues and feature requests on <a href="https://github.com/SUSE/HiGecko/issues">Github</a>.
      </div>
    </footer>

  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  /* https://thisisdallas.github.io/Simple-Grid/
  @import "simplegrid.css";

  $suse-green: #02d35f;
  $suse-green-light: rgb(160, 255, 95);
  $suse-dark: rgb(51, 51, 51);
  $suse-grey-light: #dcdddf;
  $suse-grey-mid: #6a7c87;   */

  html {
    overflow-y: scroll;
  }

  body {
    background: #fff;
    font-family: "Open Sans";
    color: rgb(51, 51, 51);
    margin: 0;
    padding: 0;
  }

  a, a:visited, a:active {
    text-decoration: none;
    color: #02d35f;
  }

  .green {
    color: #02d35f;
  }

  header {
    border-bottom: #02d35f solid 5px;
    padding-bottom: 15px;
  }

  header a, header a:visited, header a:active {
    text-decoration: none;
    color: rgb(51, 51, 51);
  }

  .nav {
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
    position: relative;
    top: 80px;
    left: 107px;
  }

  .nav li {
    font-size: 1.2em;
    line-height: 40px;
    height: 40px;
    width: 120px;
    float: left;
  }

  .nav a {
    display: block;
    transition: .3s background-color;
  }

  .nav a:hover {
    background-color: #02d35f;
  }

  .nav .router-link-active {
    background-color: #02d35f;
  }

  footer {
    text-align: center;
    border-top: #02d35f solid 5px;
    padding-top: 20px;
    margin-top: 30px !important;
    margin-bottom: 20px !important;
  }

  .fade-enter-active {
    transition: opacity .5s
  }

  .fade-enter {
    opacity: 0
  }

  .flex-center {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
