<template>
  <div class="test-container">
    <Contact />
  </div>
</template>
<script>
import Contact from "@/components/SiteAside/Contact.vue";
export default {
  components: { Contact },
}
</script>

<style scoped lang="less">
.test-container {
  width: 250px;
  height: 350px;
  border: 1px solid red;
}
</style>