<template>
  <div class="PostView">
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
            <button
              @click="createNewPost"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded col-span-4 mt-1"
            >
              Add New Post
            </button>
            <div
              v-for="(post, index) in PostsList"
              :key="post.id"
              class="col-span-2"
            >
              <!-- post card -->
              <div
                class="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto max-w-md md:max-w-2xl"
              >
                <!--horizantil margin is just for display-->
                <div class="flex items-start px-4 py-6">
                  <div class="">
                    <div v-if="post.isEditPost">
                      <div class="w-full">
                        <label
                          for="title"
                          class="text-sm font-medium text-start text-gray-900 block mb-2 dark:text-gray-300"
                          >Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          v-model="post.title"
                          style="width: 320px"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Please Enter Your title here "
                          required=""
                        />
                      </div>
                      <div class="w-full">
                        <label
                          for="body"
                          class="text-sm font-medium text-start text-gray-900 block mb-2 dark:text-gray-300"
                          >Post Body
                        </label>
                        <textarea
                          type="text"
                          name="body"
                          id="body"
                          style="width: 320px"
                          v-model="post.body"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="Please Enter Your Post Body here "
                          required=""
                        />
                      </div>
                    </div>
                    <div v-else>
                      <div class="flex items-center justify-between">
                        <h2 class="text-lg font-semibold text-gray-900 -mt-1">
                          {{ post.title }}
                        </h2>
                      </div>
                      <p class="mt-3 text-gray-700 text-sm">
                        {{ post.body }}
                      </p>
                    </div>
                    <div class="mt-4 flex items-center">
                      <div
                        v-if="post.comments.length > 0"
                        @click="toggelSelectedPost(index)"
                        class="flex mr-2 text-gray-700 text-sm mr-8 cursor-pointer"
                      >
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          />
                        </svg>
                        <span>{{ post.comments.length }}</span>
                      </div>
                      <div
                        v-if="id == post.userId"
                        @click="toggleEditmode(index)"
                        class="flex mr-2 text-gray-700 text-sm mr-8 cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          class="w-4 h-4 mr-1"
                        >
                          <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                          <path
                            d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"
                          />
                        </svg>
                      </div>
                      <div
                        v-if="id == post.userId"
                        @click="DeleteSelectedPost(index)"
                        class="flex mr-2 text-gray-700 text-sm mr-8 cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          class="w-4 h-4 mr-1"
                        >
                          <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                          <path
                            d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div v-if="post.comments.length > 0">
                      <div
                        v-if="post.showComments"
                        style="max-height: 200px"
                        class="flex items-center flex-col text-start overflow-y-scroll"
                      >
                        <div v-for="comment in post.comments" :key="comment.id">
                          <div
                            style="width: 320px"
                            class="bg-gray-100 w-full rounded-xl m-1 p-4"
                          >
                            <div class="font-medium text-start font-bold">
                              <small>{{ comment.email }}</small>
                            </div>
                            <div class="text-xs">
                              {{ comment.body }}
                            </div>
                          </div>
                        </div>
                      </div>
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
  name: "PostView",
  data() {
    return {
      PostsList: [],
      id: "",
    };
  },
  components: { Sidebar, Headerbar },
  methods: {
    createNewPost() {
      this.PostsList.unshift({
        title: "",
        body: "",
        isEditPost: true,
        comments: [],
        showComments: false,
        userId: this.id,
        id: this.PostsList.length + 1,
      });
    },
    toggelSelectedPost(index) {
      this.PostsList[index].showComments = !this.PostsList[index].showComments;
    },
    toggleEditmode(index) {
      this.PostsList[index].isEditPost = !this.PostsList[index].isEditPost;
    },
    DeleteSelectedPost(index) {
      this.PostsList.splice(index, 1);
    },
  },
  created() {
    if (!localStorage.getItem("user_id")) {
      this.$router.push({
        name: "login",
      });
    } else {
      this.id = localStorage.getItem("user_id");
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          json.forEach((post) => {
            fetch(
              `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
            )
              .then((response) => response.json())
              .then((pojs) => {
                post.comments = pojs;
                post.showComments = false;
                post.isEditPost = false;
                this.PostsList.push(post);
                console.log(post);
              });
          });
        });
    }
  },
};
</script>
