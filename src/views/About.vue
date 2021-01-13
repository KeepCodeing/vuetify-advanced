<template>
  <div>
    <AboutHero />
    <AboutIntro />
    <AboutTeam />
  </div>
</template>

<script>
  import AboutHero from "../components/about/AboutHero";
  import AboutTeam from "../components/about/AboutTeam";
  import AboutIntro from "../components/about/AboutIntro";

  export default {
    name: "About",
    components: {
      AboutHero,
      AboutTeam,
      AboutIntro,
    }
  }
</script>
<style scoped>
</style>
