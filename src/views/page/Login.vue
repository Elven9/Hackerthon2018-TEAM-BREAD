<template>
  <div id="login">
     <div class="content">
      <!-- email -->
      <div class="Text">信箱</div>
      <!-- input -->
      <div class="InputArea">
        <el-input v-model="input" :placeholder="email" clearable></el-input>
      </div>
    </div>
     <div class="content">
      <!-- password -->
      <div class="Text">密碼</div>
      <!-- input -->
      <div class="InputArea">
        <el-input v-model="input" type="password" :placeholder="password" clearable></el-input>
      </div>
    </div>
    <!-- button -->
    <div id="LoginButton">
      <el-button>登入</el-button>
    </div>
    <div id="RegistButton">
      <el-button>註冊</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      email:'',
      password:''
    }
  }
}
</script>

<style lang="scss">

#login{
  background-color: var(--bg_white);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 20vh;
  .content{
    width: 70vw;  
    
    .Text{
      color: var(--bg_blue);
    }
    .InputArea{
      border-color: var(--bg_blue);
      .el-input__inner{
        background-color: var(--li_blue);
        border-radius: 8px;
      }
    }
  }
  #LoginButton{
    // margin-top: 20%;
    position: relative;
    top: 8vh;
    left: 0vw;
    .el-button{
      border-radius: 8px;
      width: 30vw;
      background-color: var(--bg_blue);
      color: var(--bg_white);
    }
    
  }
  
}
#app{
  #RegistButton{
    position: fixed;
    left: 4%;
    bottom: 1%;
    .el-button{
      background-color: var(--li_blue);
      color: var(--bg_blue);
    }
  }
}

</style>
