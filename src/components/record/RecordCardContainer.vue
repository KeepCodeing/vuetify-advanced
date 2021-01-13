<template>
  <v-container class="px-0">
    <RecordCard :record_data="record_data" />
  </v-container>
</template>

<script>
  import RecordCard from "./RecordCard";
  export default {
    name: "RecordCardContainer",
    components: {
      RecordCard,
    },
    data() {
      return {
        record_data: [
          { image: 'https://gitee.com/hwz-magicweb/vuetify-advanced/raw/master/images/img1.jpg', title: 'The weather of today is fine', pos: 'China', date: 'A.M.' },
          { image: 'https://gitee.com/hwz-magicweb/vuetify-advanced/raw/master/images/img2.jpg', title: 'What A Wonderful World', pos: 'China', date: 'P.M.' },
          { image: 'https://gitee.com/hwz-magicweb/vuetify-advanced/raw/master/images/img9.jpg', title: 'La Fille aux Cheveux De Lin', pos: 'China', date: 'A.M.' },
          { image: 'https://gitee.com/hwz-magicweb/vuetify-advanced/raw/master/images/img4.jpg', title: 'Beautiful Ones', pos: 'China Wuhan', date: 'P.M.' },
          { image: 'https://gitee.com/hwz-magicweb/vuetify-advanced/raw/master/images/img5.jpg', title: 'Season: Spring', pos: 'China Wuhan', date: 'A.M.' },
          { image: 'https://gitee.com/hwz-magicweb/vuetify-advanced/raw/master/images/img6.jpg', title: 'Ave Maria', pos: 'China Home', date: 'P.M.' },
          { image: 'https://gitee.com/hwz-magicweb/vuetify-advanced/raw/master/images/img7.jpg', title: '你好，世界', pos: '中国 家', date: 'P.M.' },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
