<template>
  <div>
    <el-row align="middle" justify="center" :gutter="1" type="flex" id="Header">
      <el-col :span="3">
        <div id="MenuButton" @click="openLeftList">
          <img src="@/assets/img/svg/homepage/leftBar.svg" alt="leftBar" />
        </div>
      </el-col>
    
      <el-col :span="15">
        <el-autocomplete class="customer-autocomplete" v-model="input1" :placeholder="text1">
          
        </el-autocomplete>
        <el-autocomplete class="secondBar customer-autocomplete" v-if="(value != '1') " v-model="input2" :placeholder="text2">
          
        </el-autocomplete>
      </el-col>
      
      <el-col :span="5">
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
  props: {
    changeToString: {
      type: String,
      required: false
    }
  },
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
      input1: '',
      input2: ''
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
    },
    changeToString() {
      this.value = this.changeToString;
    }
  }
}
</script>

<style lang="scss" scoped>
 #Header{
  margin-top: 3%;
  background-color: transparent;
  margin-left: 7%;
  margin-right: 7%;
  #MenuButton{
    img {
      margin-top: 3px;
      width: 10vw;
      height: 10vh;
    }
  }
  .customer-autocomplete {
    width: 250px;
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
