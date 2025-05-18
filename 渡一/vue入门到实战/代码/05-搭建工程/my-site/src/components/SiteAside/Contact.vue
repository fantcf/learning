<template>
  <ul class="contact-container">
    <li>
      <a href="www.baidu.com">
        <div class="icon">
          <Icon type="github"/>
        </div>
        <span>fsadfsaf</span>
      </a>
    </li>
    <li>
      <a href="mailto:1163586133@qq.com">
        <div class="icon">
          <Icon  type="mail"/>
        </div>
        <span>1163586133@qq.com</span>
      </a>
    </li>
    <li>
      <a href="tencent://message/?Menu=yes&uin=1163586133&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
        <div class="icon">
          <Icon  type="qq"/>
        </div>
        <span>1163586133</span>
      </a>
      <div class="pop">
        <img src="../../assets/images/avatar.png" alt="">
      </div>
    </li>
    <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>dsfggasas</span>
      </a>
      <div class="pop">
        <img src="../../assets/images/avatar.png" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon.vue";

export default {
  components: {Icon}
}
</script>

<style scoped lang="less">
@import "~@/styles/var";
@itemHeight: 30px;
.contact-container {
  //height: 100%;
  //width: 100%;
  background: @dark;
  list-style: none;
  //padding: 20px;
  margin: 0;
  color: @gray;
  li {
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
  }
  .icon {
    font-size: 26px;
    width: 36px;
    &.weixin {
      font-size: 32px;
      text-indent: -3px;
    }
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 15px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: .3s;
    img {
      width: 150px;
      height: 150px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -4px;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
    }
  }
}
</style>