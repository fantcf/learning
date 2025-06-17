<template>
  <div class="test-container">
    <div>
      <div>
        <span>
          <i class="iconfont iconzhuye"></i>
        </span>
      </div>
    </div>
    <div v-for="t in types" :key="t" class="item">
      <Icon :type="t" />
      <label>{{ t }}</label>
    </div>
  </div>
</template>

<script>
import Icon, { types } from './';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      types,
    };
  },
};
</script>

<style scoped>
.test-container {
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: 580px;
  flex-wrap: wrap;
  font-size: 30px;
}

.item {
  margin: 1em;
  text-align: center;
}

.icon-container {
  display: block;
}
</style>
