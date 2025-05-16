<template>
  <div id="app">
    <h1>App组件</h1>
    第一张：
    <Avatar :url="url"/>
    第二张：
    <Avatar :url="require('@/assets/images/avatar.png')" :size="50"/>
    第三张：
<!--    <Avatar :url="1"/>-->
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";

export default {
  name: 'boy',  // 如果组件在注册的时候，没有指定名字，就使用该名字；
  components: {
    Avatar
  },
  data() {
    return {
      url: require('@/assets/images/avatar.png'),
    }
  }
}
</script>

