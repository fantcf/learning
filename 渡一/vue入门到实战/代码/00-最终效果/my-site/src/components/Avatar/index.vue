<template>
  <div class="avatar-container">
    <img
      :src="url"
      :style="{
        width: size + 'px',
        height: size + 'px',
      }"
      alt="" />
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String, // url属性必须是一个字符串
      required: true, // 属性必传
    },
    size: {
      type: Number,
      default: 150,
    },
  },
};
</script>

<style scoped>
/* 带有作用域的样式 */
.avatar-container {
  img {
    border-radius: 50%;
    object-fit: cover;
    display: block;
  }
}
</style>
