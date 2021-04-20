<template>
  <v-app id="inspire">
    <v-main>
      <SearchBar />
      <v-container>
        <MovieItem />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import MovieItem from "./components/MovieItem.vue";

export default {
  data: () => ({}),
  components: {
    SearchBar,
    MovieItem,
  },
};
</script>