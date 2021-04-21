<template>
  <div>
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

        <v-btn color="primary" elevation="4" @click="getInputValue()"
          >Search</v-btn
        >
      </v-toolbar>
    </v-card>
    <v-alert border="top" color="red lighten-2" dark v-if="movieIsEmpty">
      Please enter a movie name.
    </v-alert>
    <v-list class="mx-auto" max-width="400" v-if="isListOpen && !movieIsEmpty">
      <v-list-item-group mandatory color="indigo">
        <v-list-item v-for="(item, i) in movieList" :key="i">
          <v-list-item-content>
            <v-list-item-title
              @click="getClickedValue(item)"
              v-model="title"
              v-text="item.Title"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";

export default {
  name: "SearchBar",
  data() {
    return {
      inputValue: "",
      title: ""
    };
  },
  props: {
    isListOpen: {
      type: Boolean,
    },
    movieList: {
      type: Array,
    },
  },
  setup() {
    let movieIsEmpty = ref(false);
    let movieTitle = ref('');
    let clickedItem = ref([]);

    async function getInputValue() {
      movieTitle.value = this.inputValue;
      console.log(movieTitle.value);
      if (!movieTitle.value) {
        movieIsEmpty.value = true;
      }
      if (movieTitle.value.includes(" ")) {
        movieTitle.value = movieTitle.value.split(" ").join("+");
      }
      this.$emit("getInputValue", movieTitle.value);
    }

    function getClickedValue(item) {
      clickedItem.value = item
      this.$emit("getClickedValue", clickedItem.value);
    }

    return { getInputValue, movieIsEmpty, getClickedValue };
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