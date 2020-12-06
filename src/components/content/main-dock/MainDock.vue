<template>
  <div class="MainDock">
    <Docker>
      <DockItem v-for="(item,index) in dockItem" :item="item" :key="item.itemName" @click.native="showDialog(index)"></DockItem>
    </Docker>
  </div>
</template>

<script>
import Docker from "@/components/common/docker/Docker";
import DockItem from "@/components/common/docker/DockItem";


export default {
  name: "MainDock",
  components: {DockItem, Docker},
  props: {
    dockItem: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    showDialog(index) {
      this.$emit('currentIndex',index)
    }
  }
}
</script>

<style scoped>

</style>
