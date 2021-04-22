<template>
  <v-app id="inspire">
    <v-main>
      <SearchBar
        @getClickedValue="getAndPassClickedValue"
        @getInputValue="searchByInputValue"
        :isListOpen="isListOpen"
        :movieList="respondedMovie"
        :notFoundMovie="notFoundMovie"
        :notFoundMovieStr="notFoundMovieStr"
      />
      <v-container>
        <MovieItem
          v-for="movie in clickedItemArr"
          :key="movie.Title"
          :movie="movie"
        />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { runGetRequestWithParams } from "./API/GetRequest";
import { ref, onMounted } from "@vue/composition-api";
import SearchBar from "./components/SearchBar.vue";
import MovieItem from "./components/MovieItem.vue";

export default {
  setup() {
    let respondedMovie = ref([]);
    let isListOpen = ref(false);
    let clickedItemArr = ref([]);
    let notFoundMovieStr = ref("Movie not found!");
    let movieEmptyStr = ref("Incorrect IMDb ID.")
    let notFoundMovie = ref(false);
    let movieIsEmpty = ref(false);


    onMounted(async () => {
      if (JSON.parse(localStorage.getItem("movies"))) {
        clickedItemArr.value = JSON.parse(localStorage.getItem("movies"));
      }
    });

    async function searchByInputValue(movieTitle) {
      const response = await runGetRequestWithParams(movieTitle);
      respondedMovie.value = [response.data];
      isListOpen.value = true;
      if (response.data.Error === notFoundMovieStr.value) {
        notFoundMovie.value = true;
      }else if(response.data.Error === movieEmptyStr.value) {
        movieIsEmpty.value = true;
        isListOpen.value = false;
      }else {
        notFoundMovie.value = false;
        movieIsEmpty.value = false
      }
    }

    function getAndPassClickedValue(clickedItem) {
      isListOpen.value = false;
      clickedItemArr.value.push(clickedItem);
      localStorage.setItem("movies", JSON.stringify(clickedItemArr.value));
    }

    return {
      isListOpen,
      respondedMovie,
      searchByInputValue,
      getAndPassClickedValue,
      clickedItemArr,
      notFoundMovie,
      notFoundMovieStr,
      movieIsEmpty
    };
  },
  components: {
    SearchBar,
    MovieItem,
  },
};
</script>