<template>
  <div class="Users">
    <!-- This is an example component -->
    <Headerbar />
    <div class="flex">
      <Sidebar />
      <div class="mx-auto w-full">
        <div
          class="w-4/5 bg-white shadow-md border border-gray-200 rounded-lg p-4 mx-auto mt-10 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
          <form
            style="max-height: 775px"
            class="grid grid-cols-4 gap-4 overflow-y-scroll"
            action="#"
          >
            <div v-for="user in UserList" :key="user.id" class="col-span-2">
              <div class="w-2/2 mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden shadow-md">
                  <div
                    class="px-6 py-4 bg-white border border-gray-200 font-bold uppercase"
                  >
                    {{ user.name }}
                  </div>

                  <div class="grid grid-cols-2 gap-0 text-center">
                    <div class="p-6 bg-white border border-gray-200">
                      Posts : {{ user.posts.length }}
                    </div>
                    <div class="w- p-6 bg-white border border-gray-200">
                      Albums : {{ user.Albums.length }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  name: "UsersView",
  data() {
    return {
      UserList: [],
    };
  },
  components: { Sidebar, Headerbar },
  created() {
    if (!localStorage.getItem("user_id")) {
      this.$router.push({
        name: "login",
      });
    } else {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          json.forEach((user) => {
            fetch(
              `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
            )
              .then((response) => response.json())
              .then((pojs) => {
                user.posts = pojs;
                fetch(
                  `https://jsonplaceholder.typicode.com/albums?userId=${user.id}`
                )
                  .then((response) => response.json())
                  .then((Aljs) => {
                    user.Albums = Aljs;
                    this.UserList.push(user);
                  });
              });
          });
        });
    }
  },
};
</script>
