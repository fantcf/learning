<template>
  <div class="pager-container">
    <a :class="{ disabled: current === 1 }" @click="handleChangePageNum(1)"
      >|&lt;&lt;</a
    >
    <a
      :class="{ disabled: current === 1 }"
      @click="handleChangePageNum(current - 1)"
      >&lt;&lt;</a
    >
    <a
      v-for="num in numbers"
      :key="num"
      :class="{ active: current === num }"
      @click="handleChangePageNum(num)"
      >{{ num }}</a
    >
    <a
      :class="{ disabled: current === maxPageNum }"
      @click="handleChangePageNum(current + 1)"
      >&gt;&gt;</a
    >
    <a
      :class="{ disabled: current === maxPageNum }"
      @click="handleChangePageNum(maxPageNum)"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  name: 'Pager',
  props: {
    total: {
      type: Number,
      default: 100,
    },
    current: {
      type: Number,
      default: 10,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    maxPageNum() {
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.maxPageNum) {
        max = this.maxPageNum;
      }
      return max;
    },
    numbers() {
      const nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    handleChangePageNum(newPage) {
      this.$emit('changePage', newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;

  a {
    margin: 0 10px;
    cursor: pointer;

    &.disabled {
      cursor: not-allowed;
      color: @lightWords;
    }

    &.active {
      color: @danger;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>
