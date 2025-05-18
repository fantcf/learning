<template>
  <div id="app">
    <h1 style="width:500px;margin: 30px auto;text-align: center">App组件</h1>
    <div style="width:500px;margin: 10px auto;">
      <router-link :to="item.path" v-for="item in menuList" :key="item.path">{{item.name}} | </router-link>
    </div>
    <div><router-view></router-view></div>
    <Pager :total="total" :current="current" @pageChange="handlePageChange"/>
  </div>
</template>

<script>
import Pager from "@/components/Pager.vue";
import {menuList} from "@/modals/menuList";
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
      menuList,
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