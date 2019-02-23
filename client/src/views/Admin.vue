<template>
  <div id="admin">
      <el-container style="height:100%;">
        <el-aside width="200px">
            <router-view name="aside"></router-view>
        </el-aside>
        <el-container>
            <el-header>Header</el-header>
            <el-main>
                <router-view name="main"></router-view>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HelloWorldi18n from './components/HelloI18n.vue'

export default {
  name: 'admin',
  components: {
    // HelloWorld,
    // HelloWorldi18n
  }
}
</script>

<style>
#admin {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
</style>
