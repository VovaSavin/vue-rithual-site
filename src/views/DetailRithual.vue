<template>
  <div class="bg_gray_gradient">
    <HeaderRithual :valueNav="navValue" />
    <hr />
    <div class="w-100">
      <div class="mb-5 name_page f-bold">
        {{ chooseData().name }}
      </div>
      <div class="pos_desc_abs m-3">
        <p class="f-italic">
          {{ chooseData().description }}
        </p>
      </div>
      <div class="m-3">
        <img
          :src="chooseData().picture"
          :alt="chooseData().picture"
          class="w-100 blur-img"
        />
      </div>
    </div>
    <FooterRithual />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterRithual from "@/components/FooterRithual.vue";
import HeaderRithual from "@/components/HeaderRithual.vue";

export default {
  name: "DetailRithual",
  components: {
    FooterRithual,
    HeaderRithual,
  },
  props: {
    id: Number,
    vueName: String,
    dataDetail: Object,
  },
  data() {
    return {
      navValue: null,
      namePage: null,
      onePositon: this.dataDetail,
      localOnePosition: localStorage.getItem("detail"),
    };
  },
  created() {
    this.runApp();
  },
  methods: {
    runApp() {
      // Run
      this.onePositon = JSON.parse(this.localOnePosition);
    },
    chooseData() {
      // Choose getter detatil data for goods or service
      if (this.dataDetail) {
        return this.dataDetail;
      } else {
        return this.onePositon;
      }
    },
  },
  computed: {},
};
</script>

<style scoped>
</style>
