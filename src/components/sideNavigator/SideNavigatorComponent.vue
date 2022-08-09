<template>
  <div class="wrapper_side w-100">
    <transition name="slide-fade">
      <div class="u-custom-menu u-nav-container-collapse" style="width: 100%">
        <div class="u-menu-close">
          <svg
            id="close_btn"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="gainsboro"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
            @click="checkSideMenu()"
          >
            <path
              fill-rule="evenodd"
              d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
            />
            <path
              fill-rule="evenodd"
              d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
            />
          </svg>
        </div>
        <ul class="u-align-center">
          <li class="u-nav-item">
            <a
              class="u-button-style u-nav-link active"
              href="/calculator"
              style="padding: 10px 2px"
              >Вихідні дані</a
            >
          </li>
          <li class="u-nav-item">
            <a
              class="u-button-style u-nav-link"
              href="/"
              style="padding: 10px 2px"
              >Підбір аналогів</a
            >
          </li>
          <li class="u-nav-item">
            <a
              class="u-button-style u-nav-link"
              href="/about"
              style="padding: 10px 2px"
              >Коригування</a
            >
          </li>
          <li class="u-nav-item">
            <a
              class="u-button-style u-nav-link"
              href="#"
              style="padding: 10px 2px"
              >Результат</a
            >
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SideNavigation",
  props: {
    checkSideMenu: Function,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.wrapper_side {
  display: flex;
  flex-direction: row-reverse;
}
.u-nav-container-collapse {
  width: 100% !important;
  text-align: left;
  overflow: auto;
  position: absolute !important;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #000000ea !important;
}
.u-align-center {
  display: table;
  font-size: 1.25rem;
  margin: 20px auto 0;
  text-align: left;
  list-style: none;
  padding: 0;
  position: relative;
  min-width: 120px;
  white-space: nowrap;
  line-height: 1.6;
}
.u-nav-item {
  display: block;
  height: auto;
  position: relative;
  padding: 0;
}
.u-nav-link {
  padding-left: 0 !important;
  padding-right: 0 !important;
  background: transparent;
  color: gainsboro;
  white-space: normal;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
  display: block;
  font-style: inherit;
  font-weight: inherit;
  text-decoration: none;
  border: 0 none transparent;
  outline-width: 0;
  background-color: transparent;
  margin: 0;
}
svg {
  cursor: pointer;
  font-weight: bold;
}
svg:hover {
  fill: white;
}
.u-nav-link:hover {
  color: rgb(255, 255, 255);
}
.u-menu-close {
  content: "\2715";
  font-size: 28px !important;
  text-align: right;
  font-style: initial;
  letter-spacing: initial;
  font-weight: initial;
  margin-right: 15px;
}
</style>