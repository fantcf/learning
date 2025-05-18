<template>
  <div class="test-container">
    <Empty />
  </div>
</template>
<script>
import Empty from "@/components/Empty.vue";
export default {
  components: {
    Empty,
  }
}
</script>

<style scoped>
.test-container {
  width: 500px;
  height: 500px;
  background: #fff;
  border: 1px solid gray;
  margin: 0 auto;
  position: relative;
}
</style>