<template>

  <div class="geeko_card">

    <div class="flip-container search-result" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img class="result-image" v-lazy="avatar" width="160">
          <div class="result-content">
            <b>{{ geeko.fullname }}</b>
          </div>
        </div>
        <div class="back">
          <div class="result-content">
            <h4>{{ geeko.fullname }}</h4>
            <p><i>{{ geeko.title }}</i></p>
            <p v-if="geeko.email"><a :href="'mailto:' + geeko.email"><i class="fa fa-envelope-o fa-lg green"></i></a></p>
            <p v-if="geeko.phone"><i class="fa fa-phone fa-lg green"></i> {{ geeko.phone }}</p>
            <p>
              <router-link :to="{ name: 'geeko', params: { workforceid: geeko.workforceid} }">Details</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
  import * as helpers from '../helpers'

  export default {
    name: 'geekocard',
    props: {
      geeko: {
        type: Object,
        required: true
      }
    },
    computed: {
      avatar: function () {
        return helpers.avatarImage(this.geeko.image, this.geeko.email)
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .search-result {
    margin: auto;
    margin: 1em 2em 1em 3em;
    border: 1px solid #ccc;
    margin: 15px;
    border-top: #02d35f solid 5px;
    border-bottom: #02d35f solid 5px;
    float: left;
    width: 160px;
    background: #dcdddf;
  }

  .result-image {
  }

  .result-content {
    padding: 10px;
  }

  /* card flipping */

  .flip-container {
    perspective: 1000px;
  }

  /* flip the pane when hovered */
  .flip-container:hover .flipper, .flip-container.hover .flipper {
    transform: rotateY(180deg);
  }

  .flip-container, .front, .back {
    height: 250px;
    width: 160px;
  }

  /* flip speed goes here */
  .flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }

  /* hide back of pane during swap */
  .front, .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
  }

  /* front pane, placed above back */
  .front {
    z-index: 2;
    /* for firefox 31 */
    transform: rotateY(0deg);
  }

  /* back, initially hidden pane */
  .back {
    transform: rotateY(180deg);
  }

</style>
