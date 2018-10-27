<template>
  <div>
    <el-row type="flex" id="Header">
      <el-col id="one">
        <div id="MenuButton" :class="{'clicked' : isClicked}" @click="openLeftList">
          <img src="@/assets/img/svg/homepage/leftBar.svg" alt="leftBar" />
        </div>
        </el-col>
    
      <el-col id="two">
        <el-input-group >
          <el-input  :placeholder="text1" v-model="input">
            <el-button slot="append"></el-button>
          </el-input>
          <el-input class="secondBar" v-if="(value != '1') " :placeholder="text2" v-model="input">
            <el-button class="secondBar" slot="append"></el-button>
          </el-input>
        </el-input-group>
      </el-col>
      
      <el-col id="thr">
        <el-select id="selectButton" v-model="value" >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>      
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      text1:'請輸入地點',
      text2:'',
      options: [{
        value: '1',
        label: '地點'
        
      }, {
        value: '2',
        label: '景物'
      }, {
        value: '3',
        label: '路線'
      }],
      value: '1'
    }
  },
  methods: {
    openLeftList() {
      this.$emit('openLeftList', true);
    }
  },
  watch: {
    value() {
      if (this.value == 1) {
        this.text1 = "請輸入地點"
      }else if (this.value == 2){
        this.text1 = "請輸入地點"
        this.text2 = "請輸入景物"
      }else{
        this.text1 = "請輸入起點"
        this.text2 = "請輸入終點"
      }
    }
  }
}
</script>

<style lang="scss">
 #Header{
  margin-top: 3%;
  background-color: transparent;
  z-index: 9999;
}
.el-col{
  // height: 100%;
  #MenuButton{
    height: 100%;
    width: 100%;
  }
}
.el-row{
  justify-content: space-evenly;
  align-items: flex-start;
  padding-top: 3vw;
  #one {
    width: 10vw;
    margin: 0;
  }
  #two {
    width: 60vw;
    .secondBar{
       margin-top: 1%;
    }
  }
  #thr {
    width: 17vw;
  }
}

.el-input__inner{
  padding-right: 0%!important;
  
  border-top-color: var(--bg_blue)!important;
  border-left-color: var(--bg_blue)!important;
  border-bottom-color: var(--bg_blue)!important;
  border-right-style:none !important;
}
.el-input-group__append{
  border-top-color: var(--bg_blue)!important;
  border-right-color: var(--bg_blue)!important;
  border-bottom-color: var(--bg_blue)!important;
  border-left-color: none;
  background-color: var(--bg_white)!important;
}
#selectButton{
  padding-right: 0%!important;
  border-color: var(--bg_blue)!important;
  padding-left: 10%!important;
  border-style: solid!important;
}
.el-select-dropdown__item.selected{
  color: var(--bg_blue)!important;
}
</style>
