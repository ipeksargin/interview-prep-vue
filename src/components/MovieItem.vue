<template>
  <v-app>
    <v-main>
      <v-container>
          <v-card class="mx-auto float-left" max-width="600">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"></v-img>

            <v-card-title>MOVIE NAME</v-card-title>
            <v-card-subtitle>MOVIE YONETMEN</v-card-subtitle>

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
                <v-card-text>{{ movieSummary }}</v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-container>
      </v-main>
    </v-app>
</template>

<script>
export default {
  name: "MovieItem",
  data: () => ({
      show: false,
      movieSummary: "SUMMARY"
  }),
};
</script>
