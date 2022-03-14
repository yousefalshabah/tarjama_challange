<template>
  <div class="home">
    <!-- This is an example component -->
    <!-- <Headerbar/> -->
    <div class="flex">
      <!-- <Sidebar /> -->
      <div class="mx-auto w-full">
        <div
          class="
            w-1/3
            bg-white
            shadow-md
            border border-gray-200
            rounded-lg
            p-4
            mx-auto
            mt-10
            sm:p-6
            lg:p-8
            dark:bg-gray-800 dark:border-gray-700
          "
        >
          <form class="space-y-6" action="#">
            <h3
              class="
                text-xl
                font-medium
                text-center text-gray-900
                dark:text-white
              "
            >
              Log In
            </h3>
            <div>
              <label
                for="email"
                class="
                  text-sm
                  font-medium
                  text-gray-900
                  block
                  mb-2
                  dark:text-gray-300
                  text-start
                "
                >User Name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                class="
                  bg-gray-50
                  border border-gray-300
                  text-gray-900
                  sm:text-sm
                  rounded-lg
                  focus:ring-blue-500 focus:border-blue-500
                  block
                  w-full
                  p-2.5
                  dark:bg-gray-600
                  dark:border-gray-500
                  dark:placeholder-gray-400
                  dark:text-white
                "
                placeholder="Please Enter Your User Name "
                required=""
                v-model="username"
              />
            </div>
            <div>
              <label
                for="password"
                class="
                  text-sm
                  font-medium
                  text-gray-900
                  block
                  mb-2
                  dark:text-gray-300
                  text-start
                "
                >Email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Please Enter Your Email "
                class="
                  bg-gray-50
                  border border-gray-300
                  text-gray-900
                  sm:text-sm
                  rounded-lg
                  focus:ring-blue-500 focus:border-blue-500
                  block
                  w-full
                  p-2.5
                  dark:bg-gray-600
                  dark:border-gray-500
                  dark:placeholder-gray-400
                  dark:text-white
                "
                required=""
                v-model="email"
              />
            </div>
            <div class="flex items-start">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="
                      bg-gray-50
                      border border-gray-300
                      focus:ring-3 focus:ring-blue-300
                      h-4
                      w-4
                      rounded
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:focus:ring-blue-600
                      dark:ring-offset-gray-800
                    "
                    required=""
                  />
                </div>
                <div class="text-sm ml-3">
                  <label
                    for="remember"
                    class="font-medium text-gray-900 dark:text-gray-300"
                    >Remember me</label
                  >
                </div>
              </div>
            </div>
            <button
              type="submit"
              @click="login"
              class="
                w-full
                text-white
                bg-blue-700
                hover:bg-blue-800
                focus:ring-4 focus:ring-blue-300
                font-medium
                rounded-lg
                text-sm
                px-5
                py-2.5
                text-center
                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
              "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar.vue";
import Headerbar from "../components/HeaderBar.vue";
export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      email: "",
      loged_in_user_id: "",
    };
  },
  created() {
    if (localStorage.getItem("user_id")) {
      this.$router.push({
        name: "userProfile",
      });
    }
  },
  methods: {
    login() {
      // console.log("asdasd", this.username, this.email);
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          json.forEach((element) => {
            if (
              element.username === this.username &&
              element.email === this.email
            ) {
              this.loged_in_user_id = element.id;
              localStorage.setItem("user_id", this.loged_in_user_id);
              this.$router.push({
                name: "userProfile",
              });
            }
          });
        });
    },
  },
  components: { Sidebar, Headerbar },
};
</script>
