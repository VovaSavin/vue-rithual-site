<template>
  <div class="form-check form-switch w-50 place_check_coeff">
    <!-- <input
      class="form-check-input pointer size_check_coeff"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckDefault"
      v-model="myRowOrCol"
      @click="$emit('checked')"
    /> -->
    <input
      class="for-check-change"
      type="checkbox"
      v-model="myRowOrCol"
      @click="$emit('checked')"
    />
    <span v-if="myRowOrCol" class="small lh-125 device">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColoredr"
        class="bi bi-laptop"
        viewBox="0 0 16 16"
      >
        <path
          d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"
        />
      </svg>
    </span>
    <span v-else class="small lh-125 device">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-phone"
        viewBox="0 0 16 16"
      >
        <path
          d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"
        />
        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      </svg>
    </span>
  </div>
</template>
<script>
export default {
  name: "SwitchButton",
  components: {},
  props: {
    innerRowOrCol: Boolean,
  },
  data() {
    return {
      myRowOrCol: this.innerRowOrCol,
    };
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
.form-check-input {
  border-color: #ecedee;
  color: #ecedee;
}
.form-check-input:checked {
  background-color: #b3b3b4;
  border-color: #d6d7d8;
}
.for-check-change {
  position: absolute;
  width: 24px;
  height: 24px;
  cursor: pointer;
  opacity: 0;
}
</style>