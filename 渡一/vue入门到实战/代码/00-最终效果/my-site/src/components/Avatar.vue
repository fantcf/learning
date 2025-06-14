<template>
  <img class="avatar-container" :src="url" :style="{width: size + 'px', height: size + 'px'}" :alt="alt"/>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    url: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 150
    },
    alt: {
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped>
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block; /* 这里为什么必须要加一个block？ 因为加到块盒里会导致排编*/
}
</style>