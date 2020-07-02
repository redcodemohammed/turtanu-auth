<template>
  <v-app>
    <nav>
      <AppBar />
    </nav>
    <v-main>
      <transition v-if="animate" name="slideLeft">
        <router-view />
      </transition>
      <div v-else>
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>
<script>
import "vue2-animate/dist/vue2-animate.min.css";
import AppBar from "./components/Theme/AppBar";
export default {
  components: {
    AppBar
  },
  data: () => ({
    animate: false
  }),
  watch: {
    $route(to, from) {
      this.animate = false;
      if (
        (from.path === "/login" && to.path === "/") ||
        (from.path === "/" && to.path === "/login")
      ) {
        this.animate = true;
      }
    }
  }
};
</script>
