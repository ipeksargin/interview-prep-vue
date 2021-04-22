<template>
  <div>
    <v-row>
      <v-col sm="6" md="4">
        <v-card class="mx-auto float-left" max-width="300px">
          <v-img :src="movie.Poster" height="200px"></v-img>

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
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  data: () => ({
    show: false,
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
