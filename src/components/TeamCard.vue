<template>

  <div class="team_card">

    <div class="flip-container search-result" ontouchstart="this.classList.toggle('hover');">
      <div class="flipper">
        <div class="front">
          <img class="result-image" :src="team.img" width="160">
          <div class="result-content">
            <b>{{ team.name }}</b>
          </div>
        </div>
        <div class="back">
          <div class="result-content">
            <router-link :to="{ name: 'team', params: { teamid: team.id} }">Details</router-link>
          </div>
        </div>
      </div>
    </div>
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
