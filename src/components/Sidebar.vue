<template>
  <div class="SideBar">
    <div class="h-screen w-48 px-4 border-r bg-gray-100">
      <div class="h-3/4 flex flex-col justify-start text-gray-500 pt-12">
        <h3
          class="
            pl-1
            text-sm
            flex
            items-center
            py-2
            mb-2
            hover:bg-gray-100 hover:text-gray-700
            transition
            duration-200
            ease-in
          "
          @click="redirectToUsers"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            viewBox="0 0 26 26"
            fill="black"
            class="h-5 w-5 mr-2"
          >
            <path
              d="M16.563 15.9c-.159-.052-1.164-.505-.536-2.414h-.009c1.637-1.686 2.888-4.399 2.888-7.07c0-4.107-2.731-6.26-5.905-6.26c-3.176 0-5.892 2.152-5.892 6.26c0 2.682 1.244 5.406 2.891 7.088c.642 1.684-.506 2.309-.746 2.397c-3.324 1.202-7.224 3.393-7.224 5.556v.811c0 2.947 5.714 3.617 11.002 3.617c5.296 0 10.938-.67 10.938-3.617v-.811c0-2.228-3.919-4.402-7.407-5.557z"
              fill="currentColor"
            ></path>
          </svg>

          <a
            class="hover:text-black transition duration-200 ease-linear"
            href="#"
            >Users</a
          >
        </h3>
        <h3
          class="
            pl-1
            text-sm
            flex
            items-center
            py-2
            mb-2
            hover:bg-gray-100 hover:text-gray-700
            transition
            duration-200
            ease-in
          "
            @click="redirectToPosts"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            fill="black"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M267.4 211.6c-25.1 23.7-40.8 57.3-40.8 94.6 0 29.3 9.7 56.3 26 78L203.1 434c-4.4-1.6-9.1-2.5-14-2.5-10.8 0-20.9 4.2-28.5 11.8-7.6 7.6-11.8 17.8-11.8 28.6s4.2 20.9 11.8 28.5c7.6 7.6 17.8 11.6 28.5 11.6 10.8 0 20.9-3.9 28.6-11.6 7.6-7.6 11.8-17.8 11.8-28.5 0-4.2-.6-8.2-1.9-12.1l50-50.2c22 16.9 49.4 26.9 79.3 26.9 71.9 0 130-58.3 130-130.2 0-65.2-47.7-119.2-110.2-128.7V116c17.5-7.4 28.2-23.8 28.2-42.9 0-26.1-20.9-47.9-47-47.9S311.2 47 311.2 73.1c0 19.1 10.7 35.5 28.2 42.9v61.2c-15.2 2.1-29.6 6.7-42.7 13.6-27.6-20.9-117.5-85.7-168.9-124.8 1.2-4.4 2-9 2-13.8C129.8 23.4 106.3 0 77.4 0 48.6 0 25.2 23.4 25.2 52.2c0 28.9 23.4 52.3 52.2 52.3 9.8 0 18.9-2.9 26.8-7.6l163.2 114.7zm89.5 163.6c-38.1 0-69-30.9-69-69s30.9-69 69-69 69 30.9 69 69-30.9 69-69 69z"
            />
          </svg>
          <a
            class="hover:text-black transition duration-200 ease-linear"
            href="#"
            >Posts</a
          >
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {},
   methods: {
    redirectToUsers() {
      this.$router.push({
        name: "users",
      });
    },
    redirectToPosts() {
      this.$router.push({
        name: "posts",
      });
    },
  },
};
</script>


<style scoped>
</style>
