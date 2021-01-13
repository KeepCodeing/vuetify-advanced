<template>
  <div class="carousel_box">
    <v-container>
      <p class="text-h4 text--lighten-2 grey--text text-center">
        <span class="carousel_title">Images Grid</span>
      </p>
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-card flat>
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="n in 9"
                  :key="n"
                  class="d-flex child-flex"
                  cols="4"
                >
                  <v-card flat tile class="d-flex">
                    <v-img
                      :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                      :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                      aspect-ratio="1"
                      class="grey lighten-2"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular indeterminate color="grey lighten-5" />
                        </v-row>
                      </template>
                    </v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "ImageGrid"
  }
</script>

<style scoped>
  .carousel_box {
    margin: 30px 0;
  }
  .carousel_title {
    border-bottom: 2px solid rgba(1, 2, 3, .2);
    padding-bottom: 5px;
  }
</style>
