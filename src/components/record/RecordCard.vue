<template>
  <div>
    <v-card
      flat
      tile
      v-for="item in record_data"
      style="margin-top: 15px"
    >
      <v-img
        height="380"
        :src="item.image"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      >
        <v-row class="fill-height" justify="center" align="center">
          <v-col cols="8">
            <div class="text-right">
              <h2 class="text-sm-h5 white--text text-md-h2 font-weight-bold">{{ item.title }}</h2>
              <div class="text-sm-body-1 white--text text-md-h5 font-weight-light">{{ item.pos }}</div>
              <div class="text-h6 white--text lighten-1 font-weight-thin">{{ item.date }}</div>
              <div class="pt-4">
                <v-btn color="yellow" outlined dark depressed tile>Read More</v-btn>
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
    name: "RecordCard",
    props: {
      record_data: {
        type: Array,
        required: true,
      }
    }
  }
</script>

<style scoped>

</style>
