<template>

  <div id="search">

    <h2>Geeko Search: Find your colleagues!</h2>
    <input id="search-input" class="search" v-on:keyup.enter="search" v-model.trim="search_input" placeholder="What are you searching for?" autofocus>

    <div class="search-results-info" v-if="search_results.length">{{search_results.length}} results found</div>

    <div class="search-results">
      <template v-for="result in search_results">
        <geekocard :geeko="result"></geekocard>
      </template>
    </div>

  </div>
  </div>
</template>


<script>
  import router from '../router'
  import GeekoCard from './GeekoCard'

  export default {
    name: 'search',
    components: {
      geekocard: GeekoCard
    },
    data () {
      return {
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

</style>
