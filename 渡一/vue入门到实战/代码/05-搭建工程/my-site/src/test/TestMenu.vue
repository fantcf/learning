<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "@/components/SiteAside/Menu.vue";

export default {
  components: {
    Menu
  }
}
</script>

<style scoped>
.test-container {
  width: 500px;
  height: 500px;
  background: #111011;
  margin: 0 auto
}
</style>