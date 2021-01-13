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
          { image: require('../../assets/images/img1.jpg'), title: 'The weather of today is fine', pos: 'China', date: 'A.M.' },
          { image: require('../../assets/images/img2.jpg'), title: 'What A Wonderful World', pos: 'China', date: 'P.M.' },
          { image: require('../../assets/images/img3.jpg'), title: 'La Fille aux Cheveux De Lin', pos: 'China', date: 'A.M.' },
          { image: require('../../assets/images/carousel1.jpg'), title: 'Beautiful Ones', pos: 'China Wuhan', date: 'P.M.' },
          { image: require('../../assets/images/carousel2.jpg'), title: 'Season: Spring', pos: 'China Wuhan', date: 'A.M.' },
          { image: require('../../assets/images/carousel3.jpg'), title: 'Ave Maria', pos: 'China Home', date: 'P.M.' },
          { image: require('../../assets/images/img1.jpg'), title: '你好，世界', pos: '中国 家', date: 'P.M.' },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
