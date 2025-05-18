<template>
  <div class="site-aside-container">
    <Avatar :url="url"/>
    <h1 class="self-title">sdfasdfasdfsa</h1>
    <Menu />
    <Contact />
    <p class="footer">备案号：xxxxxxxxxx</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar.vue";
import Contact from "@/components/SiteAside/Contact.vue";
import Menu from "@/components/SiteAside/Menu.vue";

export default {
  name: "SiteAside",
  components: {Contact, Avatar, Menu},
  data() {
    return {
      url: require('../../assets/images/avatar.png'),
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px;
  box-sizing: border-box;
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  font-size: 12px;
  text-align: center;
}
.self-title {
  font-size: 1.2em;
  text-align: center;
  color: darken(gray, -15%);
}
</style>