<template>
  <div>
    <v-container class="pt-0">
      <RecordHero />
      <RecordCardContainer />
    </v-container>
  </div>

</template>

<script>
  import RecordHero from "../components/record/RecordHero";
  import RecordCardContainer from "../components/record/RecordCardContainer";

  export default {
    name: "Record",
    components: {
      RecordHero,
      RecordCardContainer,
    }
  }
</script>

<style scoped>

</style>
