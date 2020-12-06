<template>
  <div class="dockItem">
    <img :src="item.itemImg" alt=""/>
    <div>{{item.itemName}}</div>
  </div>
</template>

<script>
export default {
name: "DockItem",
  props: {
   item: {
     type: Object,
     default() {
       return {}
     }
   }
  }
}
</script>

<style scoped>
.dockItem {
  width: 50px;
  height: 50px;
  margin:0 30px;
  font-size: 12px;
  display: inline-block;
  flex-shrink: 0;
  text-overflow: ellipsis;

}
.dockItem img{
  width: 100%;
  height: 100%;

}
</style>
