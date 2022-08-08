<template>
  <div class="footer-main w-100 h-100 shadow mt-5">
    <footer
      class="
        d-flex
        flex-wrap
        justify-content-between
        align-items-center
        border-top
        p-5
      "
    >
      <div class="w-100 row_contacts">
        <ul class="list-unstyled w-50">
          <li v-for="ph in phone" :key="ph.id" class="left-text">
            <span class="small lh-125 c-white">
              <b> {{ ph.name }}: </b>
              <i> {{ ph.phone }} &nbsp;/&nbsp; {{ ph.email }} </i>
            </span>
          </li>
        </ul>
        <div class="end_side w-50">
          <ul class="nav list-unstyled">
            <li class="ms-3">
              <a class="text-muted" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-telegram"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
                  />
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  />
                </svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                  /></svg
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col_custom align-items-left">
        <div>
          <span class="mb-3 mb-md-0 text-muted small lh-125">
            © 2022 &nbsp;Powered by:
          </span>
        </div>
        <div>
          <a
            href="#"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              style="fill: #000000"
            >
              <path
                d="M 11 3 L 11 8.1582031 C 10.653 8.0172031 9.9041562 8 9.5351562 8 C 6.7591563 8 4.1894531 9.306 4.1894531 13 C 4.1894531 17.42 7.67 18 10 18 C 10.92 18 13 17.909141 14 17.619141 L 14 3 L 11 3 z M 16 3 L 16 6 L 19 6 L 19 3 L 16 3 z M 16 8 L 16 16.701172 C 16 18.217172 15.078 19.795172 13 20.701172 L 15.859375 21.996094 C 18.765375 20.996094 19 17.701172 19 16.701172 L 19 8 L 16 8 z M 9.9707031 10.550781 C 10.290703 10.550781 10.65 10.609453 11 10.689453 L 11 15.392578 C 10.65 15.472578 10.290703 15.533203 9.9707031 15.533203 C 8.6607031 15.533203 7.390625 15.12 7.390625 13 C 7.390625 10.88 8.6607031 10.550781 9.9707031 10.550781 z"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="16"
              height="16"
              viewBox="0 0 32 32"
              style="fill: #000000"
            >
              <path
                d="M 3 6 L 16 28 L 29 6 L 19 6 L 16 11.300781 L 13 6 L 3 6 z M 6.5 8 L 10.271484 8 L 16 18 L 21.728516 8 L 25.5 8 L 16 24.099609 L 6.5 8 z"
              ></path>
            </svg>
          </a>
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bootstrap"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z"
              />
              <path
                d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  name: "FooterRithual",
  components: {},
  data() {
    return {
      phone: null,
    };
  },
  created() {
    this.runApp();
  },
  methods: {
    runApp() {
      this.getPhoneNumber().then(() => this.setInToLocal(this.phone));
    },
    async getPhoneNumber() {
      // Get image for main page
      this.phone = await fetch(`${this.$store.getters.getServerUrl}/contacts/`)
        .then((response) => response.json())
        .catch(function (error) {
          console.log(error);
        });
    },
    async setInToLocal(dataJ) {
      // Set data in local storage
      localStorage.setItem("contacts", JSON.stringify(dataJ));
    },
  },
};
</script>


<style scoped>
.row_contacts {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.left-text {
  text-align: left !important;
}
</style>