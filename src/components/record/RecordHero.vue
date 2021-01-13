<template>
  <div>
    <v-card
      flat
      tile
    >
      <v-img
        src="../../assets/images/img3.jpg"
        height="380"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      >
        <v-row class="fill-height" justify="end" align="center">
          <v-col cols="6">
            <div>
              <h2 class="text-sm-h5 white--text text-md-h2 font-weight-medium">Vuetify-Photo</h2>
              <p class="text-sm-h6 white--text text-md-h3 font-weight-thin">Record Your Life</p>
              <div>
                <v-btn tile depressed class="yellow--text text--lighten-2 red lighten-2">Subscribe<v-icon>mdi-pointer</v-icon>></v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: "RecordHero"
  }
</script>

<style scoped>

</style>
