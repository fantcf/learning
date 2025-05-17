<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
import {iconClassMap} from "@/modals/iconData";
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    // 图标类样式
    fontClass() {
      return iconClassMap[this.type];
    }
  }
}
</script>

<style scoped>
/*引入图标*/
@import "//at.alicdn.com/t/c/font_4923700_qvscyhm1rbg.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>