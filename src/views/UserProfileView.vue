<template>
  <div class="UserProfile">
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
            class="grid grid-cols-4 gap-4"
            action="#"
          >
            <div class="col-span-4">
              <h1 class="font-bold">{{ user_info.name }}</h1>
            </div>
            <div class="col-span-2">Email : {{ user_info.email }}</div>
            <div class="col-span-2">User Name : {{ user_info.username }}</div>
            <div class="col-span-2">phone : {{ user_info.phone }}</div>
            <div class="col-span-2">Web site : {{ user_info.website }}</div>
            <div class="col-span-2">City : {{ user_info.address.city }}</div>
            <div class="col-span-2">
              Street : {{ user_info.address.street }}
            </div>
            <div class="col-span-2">
              Company Name : {{ user_info.company.name }}
            </div>
            <div class="col-span-2">
              Catch Phrase : {{ user_info.company.catchPhrase }}
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
  name: "UserProfile",
  data() {
    return {
      user_info: {},
    };
  },
  components: { Sidebar, Headerbar },
  created() {
    if (!localStorage.getItem("user_id")) {
      this.$router.push({
        name: "login",
      });
    } else {
      let id = localStorage.getItem("user_id");
      fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        .then((response) => response.json())
        .then((json) => {
          this.user_info = json[0];
        });
    }
  },
};
</script>
