<template>
  <v-card
    class="mx-auto float-left"
    max-width="650"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Movie Name
    </v-card-title>

    <v-card-subtitle>
      Movie Info
    </v-card-subtitle>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{movieSummary}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
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

<style scoped>
.v-card {
  margin-top:15px
}
</style>
