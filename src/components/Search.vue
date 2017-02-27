<template>

  <div id="search">

    <h2>Geeko Search: Find your colleagues!</h2>
    <input id="search-input" class="search" v-on:keyup.enter="search" v-model.trim="search_input" placeholder="What are you searching for?" autofocus>

    <div class="search-results-info" v-if="search_results.length">{{search_results.length}} results found</div>

    <div class="search-results">
      <template v-for="result in search_results">

        <div class="flip-container search-result" ontouchstart="this.classList.toggle('hover');">
          <div class="flipper">
            <div class="front">
              <template v-if="result.picture == 'http://imagebin.suse.de/2554/img'">
                <img class="result-image lazyload" v-bind:data-src="gravatar.url(result.email, {s: '160', d: 'retro'})" width="160">
              </template>
              <template v-else>
                <img class="result-image lazyload" v-bind:data-src="result.picture" width="160">
              </template>
              <div class="result-content">
                <b>{{ result.fullname }}</b>
              </div>
            </div>
            <div class="back">
              <div class="result-content">
                <h4>{{ result.fullname }}</h4>
                <p><i>{{ result.title }}</i></p>
                <p v-if="result.email"><a v-bind:href="'mailto:' + result.email"><i class="fa fa-envelope-o fa-lg green"></i></a></p>
                <p v-if="result.phone"><i class="fa fa-phone fa-lg green"></i> {{ result.phone }}</p>
                <p>
                  <router-link :to="{ name: 'geeko', params: { workforceid: result.workforceid} }">Details</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>

      </template>
    </div>


  </div>
  </div>
</template>


<script>
  import router from '../router'
  // https://github.com/emerleite/node-gravatar
  import gravatar from 'gravatar'

  export default {
    name: 'search',
    data () {
      return {
        gravatar: gravatar,
        search_input: this.$route.query.q,
        search_results: []
      }
    },
    methods: {
      search: function () {
        if (this.search_input) {
          // var search_icon = $("#search-input").css('background-image')
          // $("#search-input").css('background-image', "url(/images/ajax-loader.gif)")
          var search = this
          this.search_results = []
          // https://github.com/mzabriskie/axios
          this.axios.get('http://localhost:3000/api/search', {
            params: {
              q: this.search_input
            }
          })
            .then(function (response) {
              console.log(response.data.search.results)
              router.replace({name: 'search', query: {q: search.search_input}})
              search.search_results = response.data.search.results
              // $("#search-input").css('background-image', search_icon)
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      }
    },
    mounted () {
      this.search()
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #search {
    text-align: center;
  }

  #search-input {
    width: 430px;
    box-sizing: border-box;
    border: 2px solid #dcdddf;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-image: image-url('icons/search.png');
    background-position: 10px 12px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
  }

  .search-results-info {
    margin-top: 5px;
    color: #6a7c87;
  }

  .search-results {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

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
