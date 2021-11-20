<template>
  <div>
    <div v-if="!loading" class="row justify-content-between">
      <div class="col-lg-4 col-md-12 col-sm-12 pt-3">
        <div class="card card-background">
          <div class="card-body">
            <h5>Filter Results</h5>
            <div class="mt-5 mb-2 form-group">
              <label>Name(contains)</label>
              <input
                placeholder="Text string"
                v-model="name"
                type="text"
                class="form-control validate form-control-sm"
                title="Game Name"
              />
            </div>

            <div class="form-group mt-5 mb-2">
              <label>Minimum Score</label>
              <input
                placeholder="1 - 10"
                v-model="score"
                type="number"
                max="10"
                min="1"
                class="form-control validate form-control-sm"
                title="Game Minimum Score"
              />
            </div>

            <div class="form-group mt-5 mb-2">
              <label>Order By</label>
              <div class="row" style="padding-left:1rem; padding-right:1rem">
                <div class="col-lg-1 col-md-1 col-sm-1 btn-custom-bg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="white" class="bi bi-arrow-up" viewBox="5 0 16 16">
                      <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                    </svg>
                </div>
                <div class="col-lg-11 col-md-11 col-sm-11 custom-bg-fill">
                  <select class="form-control validate form-control-sm" v-model="sort">
                    <option v-for="sorting_option in sorting_options" :key="sorting_option.id" :value="sorting_option.sort_key">{{ sorting_option.title }}</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-9 col-md-12 col-sm-12"></div>
              <div class="col-lg-3 col-md-12 col-sm-12">
                <input type="button" class="btn btn-primary btn-rounded btn-lg btn-block" @click="clearFilters()" value="Clear"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8 col-md-12 col-sm-12">
        <div class="card bg-none">
          <div class="card-body row card-body-padding" v-for="game in games" v-bind:key="game.id">
              <div class="col-2 dark-background"></div>
              <div class="col-8 card-body-bg">
                <h3>{{ game.name }}</h3>
                <h6 class="mb-4">Release Date: {{ $filters.formatDate(game.first_release_date) }}</h6>
                <p>{{ game.summary }}</p>
              </div>
              <div class="col-2 card-body-bg">
                <div class="d-flex align-items-center justify-content-center" style="height: 100%">
                  <div class="p-3 text-white bd-highlight col-example rounded-circle" style="background-color: #5692e8; border">{{ $filters.formatRating(game.rating) }}</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
        <b-spinner></b-spinner>
        <h1>Please Wait...</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      loading: false,
      games_data: [],
      name: '',
      score: null,
      sort: null,
      sorting_options: [
        { id: 1, title: 'Release Date', sort_key: 'date' },
        { id: 2, title: 'Score', sort_key: 'score' },
        { id: 3, title: 'Name', sort_key: 'name' }
      ]
    }
  },
  methods: {
    async getData () {
      this.loading = true
      this.axios.get('https://public.connectnow.org.uk/applicant-test/').then(response => {
        this.games_data = response.data
      }).catch(({ response: { data } }) => {
        console.log(data)
      }).finally(() => {
        this.loading = false
      })
    },
    filterGamesByName: function (games) {
      return games.filter(item => {
        return this.name
          .toLowerCase()
          .split(' ')
          .every(v => item.name.toLowerCase().includes(v))
      })
    },
    filterGamesByScore: function (games) {
      return games.filter(game => (game.rating > this.score) ? game : '')
    },
    sortGames: function (games) {
      return games.sort((a, b) => {
        if (this.sort === 'date') {
          if (b.first_release_date < a.first_release_date) {
            return 1
          }
          if (b.first_release_date > a.first_release_date) {
            return -1
          }
          return 0
        } else if (this.sort === 'score') {
          if (parseInt(b.rating) < parseInt(a.rating)) {
            return 1
          }
          if (parseInt(b.rating) > parseInt(a.rating)) {
            return -1
          }
          return 0
        } else if (this.sort === 'name') {
          if (b.name.toLowerCase() < a.name.toLowerCase()) {
            return 1
          }
          if (b.name.toLowerCase() > a.name.toLowerCase()) {
            return -1
          }
          return 0
        }
      })
    },
    clearFilters () {
      this.name = ''
      this.score = null
      this.sort = null
    }
  },
  created () {
    this.getData()
  },
  computed: {
    games: function () {
      return this.filterGamesByName(this.filterGamesByScore(this.sortGames(this.games_data)))
    }
  }
}
</script>
