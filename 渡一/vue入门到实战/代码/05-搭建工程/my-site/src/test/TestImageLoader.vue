<template>
  <div class="test-container">
    <image-loader :src="src" :placeholder="placeholder" :duration="duration" @load="handleLoaded" />
  </div>
</template>
<script>
import ImageLoader from "@/components/ImageLoader.vue";
export default {
  components: {
    ImageLoader
  },
  data() {
    return {
      src: 'https://img2.baidu.com/it/u=4250025404,3394384390&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=1082',
      placeholder: require('@/assets/images/09-组件练习-imageLoader占位图片.png'),
      duration: 3000,
    }
  },
  methods: {
    handleLoaded() {
      console.log('已加载')
    }
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