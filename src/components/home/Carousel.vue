<template>
  <div>
    <v-carousel hide-delimiters cycle height="368">
      <v-carousel-item
        v-for="item in images"
        :key="item.id"
        :src="item.src"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-container>
            <div class="text-h2 text-center white--text text--lighten-2 font-weight-medium">{{ item.title }}</div>
          </v-container>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  export default {
    name: "Carousel",
    data() {
      return {
        images: [
          { src: 'https://gitee.com/hwz-magicweb/vuetify-advanced/raw/master/images/img1.jpg', title: 'Wish You Were Here', id: 101 },
          { src: 'https://gitee.com/hwz-magicweb/vuetify-advanced/raw/master/images/img2.jpg', title: 'Comfortably Numb', id: 102 },
          { src: 'https://gitee.com/hwz-magicweb/vuetify-advanced/raw/master/images/img4.jpg', title: 'No Way Escape', id: 103 },
        ],
      }
    }
  }
</script>

<style scoped>
</style>
