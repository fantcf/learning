<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from '../Icon';

export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: '无数据',
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
@import '~@/styles/var.less';

.empty-container {
  //.self-center();
  height: 100%;
  color: @gray;
  //text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.icon-container {
  font-size: 72px;
}
</style>
