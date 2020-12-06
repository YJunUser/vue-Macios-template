<template>
  <div class="layout">
    <MainContent></MainContent>
  </div>
</template>

<script>
import MainContent from "@/layout/components/MainContent";

export default {
  name: "Layout",
  components: {MainContent}
}
</script>

<style scoped>
 .layout {
   display: flex;
   flex-flow: row nowrap;
 }
</style>
