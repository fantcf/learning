<template>
  <div class="icon-container">
    <i class="iconfont" :class="iconClass"></i>
  </div>
</template>

<script>
import {iconClassMap} from "@/modals/iconData";

export default {
  name: "Icon",
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    iconClass() {
      return iconClassMap[this.type];
    }
  }
}
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
</style>
