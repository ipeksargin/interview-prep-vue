<template>
  <div>
    <v-alert border="top" color="red lighten-2" dark v-if="movie.Error == movieNotFoundError">
      There isn't any movie with that name released in 2020.
    </v-alert>
    <v-card class="mx-auto float-left" max-width="650" v-else>
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
      ></v-img>

      <v-card-title>
        {{ movie.Title }}
      </v-card-title>

      <v-card-subtitle>
        Writer: {{ movie.Writer }} <br />
        Director: {{ movie.Director }} <br />
        Release: {{ movie.Released }} in {{ movie.Country }}
      </v-card-subtitle>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            {{ movie.Plot }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  data: () => ({
    show: false,
    movieNotFoundError: "Movie not found!"
  }),
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.v-card {
  margin-top: 15px;
}
</style>
