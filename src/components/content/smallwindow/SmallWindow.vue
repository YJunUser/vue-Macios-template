<template>
  <div class="smallWindow">
    <div :class="{dragBox: !isPlus,dragBoxPlus: isPlus}" ref="oDiv"
         v-if="isShowDrag" @click.left="moreLevel" :style="{zIndex: isLevel}" v-drag="isDrag">
      <div class="NavBar" ref="navDiv">
        <div class="buttonBox">
          <el-button type="text" icon="el-icon-plus" size="small" class="plus" @click="windowPlus"
                     v-if="!isPlus"></el-button>
          <el-button type="text" icon="el-icon-minus" size="small" class="shrink" v-else
                     @click="windowPlus"></el-button>
          <el-button type="text" icon="el-icon-close" size="small" class="close" @click.stop="closewindow"></el-button>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>


export default {
  name: "SmallWindow",
  props: {
    isShow: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  watch: {
    isShow() {
      if (this.isShowDrag === false) {
        this.isShowDrag = this.isShow
      }
    },
  },
  data() {
    return {
      isShowDrag: false,
      isPlus: false,
      isLevel: 0,
      isDrag: true,
    }
  },
  methods: {
    //事件监听

    //窗口事件
    closewindow() {
      this.isShowDrag = false
      this.$emit('closed')
    },
    windowPlus() {
      let oDiv = this.$refs.oDiv
      oDiv.style.left = 0
      oDiv.style.top = 0
      this.isDrag = this.isPlus !== false;
      this.isPlus = !this.isPlus
    },
    moreLevel() {
      this.isLevel = 999
      this.$emit('changeLevel')
    }
  },

  //窗口拖动指令
  directives: {
    drag: {
      // 指令的定义
      bind: function (el) {
        let oDiv = el;  // 获取当前元素
        oDiv.onmousedown = (e) => {
          // 算出鼠标相对元素的位置
          let disX = e.clientX - oDiv.offsetLeft;
          let disY = e.clientY - oDiv.offsetTop;
          if (disY > 40) return false

          document.onmousemove = (e) => {
            // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - disX;
            let top = e.clientY - disY;

            oDiv.style.left = left + 'px';
            oDiv.style.top = top + 'px';
            return false;
          };
          document.onmouseup = (e) => {
            document.onmousemove = null;
            document.onmouseup = null;
          }
        }
      },
      update(el, binding) {
        if (binding.value === false) {
          el.onmousedown = null
        } else {
          let oDiv = el
          oDiv.onmousedown = (e) => {
            // 算出鼠标相对元素的位置
            let disX = e.clientX - oDiv.offsetLeft;
            let disY = e.clientY - oDiv.offsetTop;
            if (disY > 40) return false

            document.onmousemove = (e) => {
              // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
              let left = e.clientX - disX;
              let top = e.clientY - disY;

              oDiv.style.left = left + 'px';
              oDiv.style.top = top + 'px';
              return false;

            };
            document.onmouseup = (e) => {
              document.onmousemove = null;
              document.onmouseup = null;
            }
          }
        }
      }

    }

  }

}
</script>

<style scoped>
.smallWindow {

}

.dragBoxLevel {
  z-index: 9;
}

.dragBox {
  position: absolute;
  left: 200px;
  top: 100px;
  width: 1000px;
  height: 600px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
  overflow: hidden;
}

.dragBoxPlus {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
  overflow: hidden;
}

.NavBar {
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #666666;

  cursor: pointer;

}

.buttonBox {
  float: right;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  text-align: center;
  width: 100px;
  height: 40px;
}

.shrink {
  display: inline-block;
  width: 40px;
}

.shrink:hover {
  background: #666666;
  color: #ffffff;
}

.plus {
  display: inline-block;
  width: 40px;
}

.plus:hover {
  background: #666666;
  color: #ffffff;
}

.close {
  display: inline-block;
  width: 40px;
}

.close:hover {
  background: red;
  color: #ffffff;
}

</style>
