<template>
  <div>
    <Carousel />
    <ImageGrid />
    <Recently />
  </div>
</template>

<script>
  import Carousel from "../components/home/Carousel";
  import ImageGrid from "../components/home/ImageGrid";
  import Recently from "../components/home/Recently";


  export default {
    name: "Home",
    components: {
      Carousel,
      ImageGrid,
      Recently,
    }
  }
</script>

<style scoped>

</style>
