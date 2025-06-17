<template>
  <div class="test-container">
    <Avatar :size="300" url="http://mdrs.yuanjin.tech/img/20201031141350.jpg" />
  </div>
</template>

<script>
import Avatar from './';

export default {
  components: {
    Avatar,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 100%;
  height: 100%;
  background: skyblue;

  .avatar-container {
    display: flex;
    justify-content: center;
  }
}
</style>
