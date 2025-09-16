<style>
.flag-background {
  position: relative;
  z-index: 0;
}

.flag-background::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("/Flag.svg") no-repeat center/cover;
  opacity: 0.1;
  z-index: -1;
}

.text-gray-500 {
  color: #6b7280;
}

.text-gray-600 {
  color: #4b5563;
}

.text-success {
  color: #10b981;
}
</style>

<template>
  <v-app :theme="themeStore.selectedTheme">
    <NavigationBar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>


<script>
import { useThemeStore } from "@/store/theme";
import NavigationBar from "@/components/navigation_bar.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    NavigationBar,
    Footer,
  },
  data() {
    return {
      themeStore: useThemeStore(),
      selectedTheme: localStorage.getItem("theme") || "light",
    };
  },
};
</script>
