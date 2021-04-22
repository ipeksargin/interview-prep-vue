<template>
  <v-app id="inspire">
    <v-main>
      <SearchBar
        @getClickedValue="getAndPassClickedValue"
        @getInputValue="searchByInputValue"
        :isListOpen="isListOpen"
        :movieList="respondedMovie"
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
    let localStorageArr = ref([]);
  
    onMounted(() => {
      console.log("mounted");
      if(JSON.parse(localStorage.getItem("movies"))){
        clickedItemArr.value = JSON.parse(localStorage.getItem("movies"))
        localStorageArr.value = JSON.parse(localStorage.getItem("movies"));
      }
    });

    async function searchByInputValue(movieTitle, movieIsEmpty) {
      if (movieIsEmpty) return;
      const response = await runGetRequestWithParams(movieTitle);
      respondedMovie.value = [response.data];
      isListOpen.value = true;
    }

    function getAndPassClickedValue(clickedItem) {
      isListOpen.value = false;
      clickedItemArr.value.push(clickedItem);

      localStorage.setItem("movies", JSON.stringify(clickedItemArr));
      console.log(clickedItemArr);
    }

    return {
      isListOpen,
      respondedMovie,
      searchByInputValue,
      getAndPassClickedValue,
      clickedItemArr,
    };
  },
  components: {
    SearchBar,
    MovieItem,
  },
};
</script>