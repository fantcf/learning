<template>
  <div id="app">
    <h1>App组件</h1>
    <Pager :total="total" :current="current" @pageChange="handlePageChange"/>
  </div>
</template>

<script>
import Pager from "@/components/Pager.vue";

export default {
  name: 'boy',  // 如果组件在注册的时候，没有指定名字，就使用该名字；
  components: {
    Pager,
  },
  data() {
    return {
      url: require('@/assets/images/avatar.png'),
      current: 1,
      total: 302,
    }
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    }
  }
}
</script>

<style scoped>
/*iconfont是子组件的类名*/
.iconfont{
  font-size: 26px;
  color: orangered;
}
</style>