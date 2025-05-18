<template>
  <nav class="menu-container">
    <a v-for="item in sideMenuList" :key="item.link" :href="item.link" :class="{selected: isSelected(item)}" >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{item.title}}</span>
    </a>
  </nav>
</template>

<script>
import Icon from "@/components/Icon.vue";
import {sideMenuList} from "@/modals/menuList";

export default {
  components: {Icon},
  data() {
    return {
      sideMenuList,
    }
  },
  methods: {
    isSelected(item) {
      const link = item.link.toLowerCase();
      const curPathName = location.pathname.toLowerCase() + location.search.toLowerCase();
      if (item.startWith) {
        return curPathName.startsWith(link);
      } else {
        return curPathName === link;
      }
    }
  }
}
</script>

<style scoped lang="less">
@import '~@/styles/var';
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    &.selected {
      background: darken(@words, 3%);
    }
    padding: 0 50px;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>