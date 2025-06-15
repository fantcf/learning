<template>
  <div class="test-pager">
    <Pager
      :current="current"
      :limit="10"
      :total="1000"
      :visible-number="8"
      @changePage="handleChangePage" />
  </div>
</template>
<script>
import Pager from '@/components/Pager/Index.vue';

export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
    };
  },
  methods: {
    handleChangePage(page) {
      this.current = page;
    },
  },
};
</script>

<style lang="less" scoped></style>
