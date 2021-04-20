<template>
  <v-card
    color="grey darken-1"
    flat
    tile
  >
    <v-toolbar color="grey lighten-3">
      <v-toolbar-title>Search a Movie</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
        placeholder="Make a Search"
        filled
        dense
        class="expand-search mt-5"
        prepend-inner-icon="mdi-magnify"
      ></v-text-field>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>

export default {
  name: "SearchBar",
  data() {
    return {};
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