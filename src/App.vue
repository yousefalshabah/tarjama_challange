<template>
  <router-view />
</template>
<script>
import './assets/tailwind.css'
export default {
  name: "App",
  data() {
    return {
      msg: "hello london",
      message: "what a woderfull world ",
      type: "",
    };
  },
  methods: {
    redirect() {
      this.$router.push({
        name: "home",
      });
    },
    back() {
      this.$router.go(-1);
    },
    forword() {
      this.$router.go(1);
    },
    changeHello() {
      this.msg = "hello lebanon";
    },
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #000000;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: white;
  background: black;
  padding: 10px;
  border-radius: 4px;
}
</style>
