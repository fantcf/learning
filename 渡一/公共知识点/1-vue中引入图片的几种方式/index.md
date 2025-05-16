# vue中引入图片的几种方式

## 错误示范
``` vue
<template>
 <img :src='src'>
 <img :src='require('xxx.png')'>
</template>
<script>
  export default {
    data() {
      return {
        src: require('xxx.png')
      }
    }
  }
</script>
```
解读：
1. 没有问题-使用require：在webpack中，require会自动处理资源；
2. 有问题-require放入data中：vue会遍历data，给src加上响应式，但是src可能不需要响应式，造成性能浪费；

## 解决方式1：使用computed
``` vue
<template>
 <img :src='src'>
</template>
<script>
  const src = require('xxx.png');
  export default {
    computed: {
      src() {
        return src;
      }
    }
  }
</script>
```
解读：
为什么使用computed更好？
因为computed本身就有缓存，可以减少性能浪费；

## 解决方式2：当图片不变时，直接引入
### 1. 通过v-bind添加；
``` vue
<template>
  <img :src='xxx.png'>
</tempalte>
```

### 2. 通过在style中添加：非动态
```vue
<template>
  <div class="bg"></div>
</template>
<style>
  .bg{
    background: url('xxx.png')
  }
</style>
```

### 3. 通过在style中添加：动态
```vue
<template>
  <div :class="flag ? 'bg1' : 'bg2'" ></div>
</template>
<script>
  export default {
      data() {
          return {
              flag: true
          }
      }
  }
</script>
<style>
  .bg1{
    background: url('xxx1.png');
  }
  .bg2{
    background: url('xxx2.png');
  }
</style>
```