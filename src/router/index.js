import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import UsersView from "../views/UsersView.vue";
import PostView from "../views/PostsView.vue";
import UserProfileView from "../views/UserProfileView.vue";
import NotFound from "../views/NotFound.vue";
const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/users",
    name: "users",
    component: UsersView,
  },
  {
    path: "/userProfile",
    name: "userProfile",
    component: UserProfileView,
  },
  {
    path: "/posts",
    name: "posts",
    component: PostView,
  },
  // catchAll 404
  {
    path: "/:catchAll(.*)",
    name: "notFount",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
