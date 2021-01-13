<template>
  <div class="team_outline">
    <v-container>
      <div class="py-7">
        <div class="team_box text-h4 text--lighten-2 grey--text text-center">
          <span class="team_title">Our Team</span>
        </div>
        <v-row justify="center">
          <v-col cols="12" md="3" v-for="item in items">
            <v-card flat tile>
              <v-img class="mb-2" height="330" :src="item.image" />
              <div class="text-center">
                <div class="headline">{{ item.name }}</div>
                <p class="subtitle-1 grey--text">{{ item.role }}</p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "AboutTeam",
    data() {
      return {
        items: [
          { image: require('../../assets/images/role1.jpg'), name: 'UDK', role: 'Marisa' },
          { image: require('../../assets/images/role2.jpg'), name: 'HNS', role: 'Alice' },
          { image: require('../../assets/images/role3.png'), name: 'RU', role: 'Reimu' },
        ]
      }
    }
  }
</script>

<style scoped>
  .team_box {
    margin: 30px 0;
  }
  .team_title {
    border-bottom: 2px solid rgba(1, 2, 3, .2);
    padding-bottom: 5px;
  }
  .team_outline {
    border-top: 1px solid rgba(0, 0, 0, .2);
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
</style>
