<template>
  <div class="HeaderBar">
    <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span
          @click="redirectToProfilePage"
          class="font-semibold text-xl tracking-tight cursor-pointer"
          >{{ name }}</span
        >
      </div>
      <button
        @click="logOut"
        class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-blue-700 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Log Out
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Headerbar",
  data() {
    return {
      name: "",
    };
  },
  props: {},
  methods: {
    logOut(){
      localStorage.clear();
      this.$router.push({
        name: "login",
      });
    },
    redirectToProfilePage() {
      this.$router.push({
        name: "userProfile",
      });
    },
  },
  created() {
    let id = localStorage.getItem("user_id");
    fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        this.name = json[0].name;
      });
  },
};
</script>

<style scoped></style>
