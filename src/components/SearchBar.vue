<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="indigo darken-2"
      dark
      shrink-on-scroll
      prominent
      scroll-target="#scrolling-techniques"
    >
      <v-app-bar-title>Search a Movie</v-app-bar-title>

      <v-spacer />

      <v-text-field
        placeholder="Make a Search"
        filled
        dense
        class="expand-search mt-1"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet id="scrolling-techniques" class="overflow-y-auto" max-height="785">
      <v-container style="height: 1000px"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
    };
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