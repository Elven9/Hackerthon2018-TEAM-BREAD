<template>
  <div>
    <el-row type="flex" id="Header">
      <el-col id="one">
        <div>
          <button id="MenuButton" :class="{'clicked' : isClicked}" @click="isClicked = !isClicked" type="button"></button>
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

    <!-- left bar -->
    <div>
      <!-- profile -->
      
      <div class="LeftBarGroup" >
        <div id="LeftBarProfile">
          <div>
            <img src="@/assets/img/svg/leftbar/Avatar.svg" alt="share" height="30vw"/>
          </div>
          <div id="ProfileText">Account</div>
        </div>
      </div>

      <div class="LeftBarGroup">
        <button class="LeftBarButton" type="button">
          <!-- picture -->
          <div>
             <img src="@/assets/img/svg/leftbar/shareTool.svg" alt="share" height="15vw"/>
          </div>
          <div class="LeftBarText">分享地點位置</div>
        </button>
        <button class="LeftBarButton" type="button">
           <!-- picture -->
          <div>
            <img src="@/assets/img/svg/leftbar/BackToInitTool.svg" alt="Init" height="15vw"/>
          </div>
          <div class="LeftBarText">回到現在位置</div>
        </button>
        <button class="LeftBarButton" type="button">
           <!-- picture -->
          <div>
            <img src="@/assets/img/svg/leftbar/searchLocationTool.svg" alt="searchLocation" height="15vw"/>
          </div>
          <div class="LeftBarText">搜尋地點</div>
        </button>
        <button class="LeftBarButton" type="button">
           <!-- picture -->
          <div>
            <img src="@/assets/img/svg/leftbar/ItemSearchTool.svg" alt="ItemSearch" height="15vw"/>
          </div>
          <div class="LeftBarText">搜尋景物</div>
        </button>
        <button class="LeftBarButton" type="button">
           <!-- picture -->
          <div>
            <img src="@/assets/img/svg/leftbar/photo.svg" alt="photo" height="15vw"/>
          </div>
          <div class="LeftBarText">為地點新增照片或文字</div>
        </button>
        <button class="LeftBarButton" type="button">
           <!-- picture -->
          <div>
            <img src="@/assets/img/svg/leftbar/FavoriteTool.svg" alt="favorite" height="15vw"/>
          </div>
          <div class="LeftBarText">我的最愛</div>
        </button>
        <button class="LeftBarButton" type="button">
           <!-- picture -->
          <div>
            <img src="@/assets/img/svg/leftbar/logout.svg" alt="logout" height="15vw"/>
          </div>
          <div class="LeftBarText">Logout</div>
        </button>
      </div>
        
        
    </div>
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
.el-col{

  // height: 100%;
  #MenuButton{
    background: var(--bg_white);
    border-color: var(--bg_brown);
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
.clicked{
  background-color: #f5f7fa;
}
.el-button{
  color: var(--bg_white);
  border: none;
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

.LeftBarGroup{
  display: flex;
  flex-direction: column;
  background-color: var(--da_blue);
  #LeftBarProfile{
    display: flex;
    background-color: var(--li_blue);
    flex-direction: row;
    #ProfileText{
      color: var(--da_blue);
    }
  }
  .LeftBarButton{
    display: flex;
    flex-direction: row;

    .LeftBarText{
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--bg_white);
    }
  }
}


</style>
