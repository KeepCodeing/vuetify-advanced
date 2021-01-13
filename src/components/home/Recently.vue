<template>
  <div class="recently_box">
    <v-container>
      <p class="text-h4 text--lighten-2 grey--text text-center">
        <span class="recently_title">Recent Project</span>
      </p>
<!--      class="mt-0"-->
      <v-row>
        <v-col cols="12" md="4" v-for="item in recently_data">
          <v-card
          max-width="344"
          class="mx-auto"
          flat
          tile
        >
          <v-img
            :src="item.image"
            height="194"
          >
<!--            <v-row class="fill-height" align="end">-->
<!--              <div class="recently_card_title white&#45;&#45;text">Hello</div>-->
<!--            </v-row>-->
          </v-img>

          <v-card-text>{{ item.content }}</v-card-text>

          <v-card-actions>
            <v-btn
              text
              color="primary"
            >
              Read
            </v-btn>
            <v-spacer />
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "Recently",
    data() {
      return {
        recently_data: [
          { image: 'https://gitee.com/hwz-magicweb/vuetify-advanced/raw/master/images/img4.jpg', content: 'Waiting for someone or sometime show you the way...' },
          { image: 'https://gitee.com/hwz-magicweb/vuetify-advanced/raw/master/images/img5.jpg', content: 'So, so you think can tell, heaven form hell, blue skies form pain...' },
          { image: 'https://gitee.com/hwz-magicweb/vuetify-advanced/raw/master/images/img6.jpg', content: 'Hello, is anybody in there, just nod if you can hear me, is anyone home...' },
        ]
      }
    }
  }
</script>

<style scoped>
  .recently_box {
    background-color: rgb(245, 245, 245);
    padding: 46px 0;
    border-top: 1px solid rgba(0, 0, 0, .2);
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
  .recently_card_title {
    height: 60px;
    background-color: rgba(0, 0, 0, .2);
    padding: 10px;
    width: 100%;
  }
  .recently_title {
    border-bottom: 2px solid rgba(1, 2, 3, .2);
    padding-bottom: 5px;
  }
</style>
