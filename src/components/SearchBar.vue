<template>
  <v-card color="grey darken-1" flat tile>
    <v-toolbar color="grey lighten-3">
      <v-toolbar-title>Search a Movie</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
        v-model="inputValue"
        placeholder="Movie Title"
        filled
        dense
        class="expand-search mt-5"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>
      <v-spacer></v-spacer>

      <v-btn color="primary" elevation="4" @click="searchByInputValue()">Search</v-btn>

    </v-toolbar>
  </v-card>
</template>

<script>

export default {
  name: "SearchBar",
  data() {
    return {
      inputValue: "",
    };
  },
  setup() {
  },
  methods: {
    async searchByInputValue(){
      let movieTitle = this.inputValue;
      if (movieTitle.includes(" ")) {
        movieTitle = movieTitle.split(" ").join("+");
      }
      this.$emit('searchByInputValue', movieTitle);
    },
  },
};
</script>

<style>
.v-input.expand-search .v-input__slot::before {
  border-color: transparent !important;
}
.v-input.expand-search .v-input__slot::after {
  border-color: transparent !important;
}
</style>