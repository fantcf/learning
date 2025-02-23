<template>
  <div>
    <student></student>
    <school></school>
  </div>
</template>

<script>
import Student from "./Student.vue";
import School from "./School.vue";

export default {
  name: "App",
  components: {School, Student},
}
</script>

<style scoped>

</style>