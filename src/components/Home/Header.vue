<template>
  <div>
    <el-row id="Header">
      <el-col span= "3">
        <el-button id="MenuButton" :class="{'clicked': isClicked}" @click="isClicked=!isClicked"></el-button>
        </el-col>
    
      <el-col span= "15">
        <el-input-group >
          <el-input  :placeholder="text1" v-model="input">
            <el-button slot="append"></el-button>
          </el-input>
          <el-input class="secondBar" v-if="(value != '1') " :placeholder="text2" v-model="input">
            <el-button class="secondBar" slot="append"></el-button>
          </el-input>
        </el-input-group>
      </el-col>
      
      
      <el-col span="4">
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
      value: '1',
      isClicked: false
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
}
.secondBar{
    margin-top: 1%;
}
#MenuButton{
  background: var(--bg_white)!important;
  border-color: var(--bg_blue)!important;
  height: 35px!important;
}
.clicked{
  background-color: #f5f7fa;
}
.el-button{
  color: var(--bg_white);
  
  border: none;
  
}
.el-input--suffix{

}
.el-col{
  margin: 1.5%;
  
}
.el-col-3{
    width: 10%!important;
    
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
  border-style: solid!important;
}
.el-select-dropdown__item.selected{
  color: var(--bg_blue)!important;
}
</style>
