<template>
  <div id="app">
    <avatar :url="url" />
    <router-view/>
  </div>
</template>

<style lang="less">

</style>
<script>
import Avatar from "@/components/Avatar.vue";
export default {
  components: {Avatar},
  data() {
    return {
      url: 'https://gips2.baidu.com/it/u=3133340021,3370688897&fm=3042&app=3042&f=JPEG&wm=1,baiduai,0,0,13,9&wmo=0,0&w=640&h=480'
    }
  }
}
</script>