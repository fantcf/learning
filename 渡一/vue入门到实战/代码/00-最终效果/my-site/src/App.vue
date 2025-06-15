<template>
  <div id="app">
    <avatar :url="url" />
    <Icon type="home" />
    <Pager />
  </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue';
import Icon from '@/components/Icon.vue';
import Pager from '@/components/Pager/Index.vue';

export default {
  components: { Pager, Icon, Avatar },
  data() {
    return {
      url: 'https://gips2.baidu.com/it/u=3133340021,3370688897&fm=3042&app=3042&f=JPEG&wm=1,baiduai,0,0,13,9&wmo=0,0&w=640&h=480',
    };
  },
};
</script>

<style scoped>
.icon-container {
  color: red;
}
</style>
