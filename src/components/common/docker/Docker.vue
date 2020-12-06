<template>
  <div class="dockerContainer">
    <div :class="{docker: !isPlus,dockerPlus: isPlus}">
      <slot></slot>
      <el-button @click="changeDockStyle" :class="{changeBtn: isPlus}">+</el-button>
    </div>



  </div>
</template>

<script>
export default {
  name: "Docker",
  data() {
    return {
      isPlus: false
    }
  },
  methods: {
    changeDockStyle() {
      this.isPlus = !this.isPlus
    }
  }
}
</script>

<style scoped>
.dockerContainer {
  display: flex;
  flex-flow: nowrap row;
  justify-content: space-around;

}

.dockerPlus {
  border: 1px solid #666666;
  position: fixed;
  width: 50%;
  height: 600px;
  overflow: auto;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  top: 200px;
  left: 400px;
}

.docker {
  /*border-radius: 30% 30%;*/
  border: 1px solid #666666;
  height: 100px;
  position: fixed;
  box-sizing: border-box;
  bottom: 30px;
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
  align-items: center;
  max-width: 70%;
}
.docker::-webkit-scrollbar {
  width: 4px;
  height: 10px;
}
.docker::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
.docker::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);

}

.changeBtn {
  margin-top: auto;
  margin-left: auto;

}
</style>


