<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "@/components/SiteAside/index.vue";

export default {
  components: {
    SiteAside
  }
}
</script>

<style scoped lang="less">
.test-container {
  width: 250px;
  height: 600px;
  border: 1px solid gray;
}
</style>