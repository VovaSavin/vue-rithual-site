<template>
  <div class="bg_gray_gradient">
    <HeaderRithual :valueNav="navValue" />
    <hr />
    <div class="w-100">
      <div class="mb-5 name_page">It is ID: {{ id }}</div>
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
  },
  data() {
    return {
      navValue: null,
      namePage: null,
      //   itId: this.id,
    };
  },
  created() {
    this.runApp();
  },
  methods: {
    runApp() {
      // Run
      return;
    },
  },
};
</script>

<style scoped>
</style>
