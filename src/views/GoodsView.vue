<template>
  <div class="bg_gray_gradient">
    <HeaderRithual :valueNav="navValue" />
    <hr />
    <div class="w-100">
      <div class="row row justify-content-end mb-3 name_page">
        <div class="col-6">
          <b>
            {{ namePage }}
          </b>
        </div>
        <div class="col-3">
          <SwitchButton
            :innerRowOrCol="rowOrCol"
            @checked="rowOrCol = !rowOrCol"
          />
        </div>
      </div>
      <div :class="{ row: !rowOrCol, 'my-col': rowOrCol }">
        <div
          v-for="good in rithualGoods"
          :key="good.id"
          class="col-4 mb-4"
          :class="{ 'm-my-auto': rowOrCol }"
        >
          <div>
            <img
              :src="good.picture"
              :alt="good.name"
              width="355"
              height="255"
            />
          </div>
          <div>
            <a href="#" class="a_non_style text_write">
              <b>
                {{ good.name }}
              </b>
            </a>
          </div>
        </div>
      </div>
    </div>
    <FooterRithual />
  </div>
</template>

<script>
// @ is an alias to /src
import { navigator } from "@/assets/data";
import FooterRithual from "@/components/FooterRithual.vue";
import SwitchButton from "@/components/SwitchButton.vue";
import HeaderRithual from "@/components/HeaderRithual.vue";

export default {
  name: "ServicesView",
  components: {
    FooterRithual,
    SwitchButton,
    HeaderRithual,
  },
  data() {
    return {
      navigator: navigator(),
      rithualGoods: null,
      navValue: 2,
      namePage: null,
      rowOrCol: null,
    };
  },
  created() {
    this.runApp();
  },
  methods: {
    runApp() {
      // Run
      this.getGoods().then(() => this.getNamePage());
    },
    async getGoods() {
      // Get data of rithual goods
      this.rithualGoods = await fetch(
        `${this.$store.getters.getServerUrl}/rith_goods/`
      )
        .then((response) => response.json())
        .catch(function (error) {
          console.log(error);
        });
    },
    getNamePage() {
      this.namePage = this.navigator[this.navValue].text;
    },
  },
};
</script>

<style scoped>
.a_non_style {
  text-decoration: none !important;
  padding: 1rem;
  color: #444444;
}
.a_non_style:hover {
  color: rgb(197, 156, 81);
}
</style>