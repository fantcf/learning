<template>
  <!-- 只有总页数大于1时才显示 -->
  <div v-if="pageNumber > 1" class="pager-container">
    <a :class="{ disabled: current === 1 }" @click="handleClick(1)">
      |&lt;&lt;
    </a>
    <a :class="{ disabled: current === 1 }" @click="handleClick(current - 1)">
      &lt;&lt;
    </a>
    <a
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n === current }"
      @click="handleClick(n)">
      {{ n }}
    </a>

    <a
      :class="{ disabled: current === pageNumber }"
      @click="handleClick(current + 1)">
      &gt;&gt;
    </a>
    <a
      :class="{ disabled: current === pageNumber }"
      @click="handleClick(pageNumber)">
      &gt;&gt;|
    </a>
  </div>
</template>

<style lang="less" scoped>
@import '~@/styles/var.less';

.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;

  a {
    color: @primary;
    margin: 0 6px;
    cursor: pointer;

    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }

    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 总页数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    // 得到显示的最小数字
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers() {
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.current) {
        return;
      }
      // 抛出一个事件
      this.$emit('pageChange', newPage);
    },
  },
};
</script>
