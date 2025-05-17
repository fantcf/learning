<template>
  <img :src="url" :alt="alt" :style="{width: `${size}px`, height: `${size}px`}" class="avatar-container">
</template>

<script>
export default {
  // props: ['url'],  // 简写
  props: {
    url: {
      type: String,  // 注意：这里不能写成'string'
      required: false,
      default: '',
    },
    alt: {
      type: String,
      required: false,
      default: ''
    },
    size: {
      type: Number,
      required: false,
      default: 100
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar-container{
  border-radius: 50%;
  object-fit: cover;  // 防止宽高比例不对；
  display: block;  // 防止放到行盒里被排编；
}
</style>