<template>
  <div class="mainList">
    <ul>
        <router-link to="/admin/profile"><li><i class="el-icon-edit"></i>Profile</li></router-link>
        <router-link to="/admin/source"><li><i class="el-icon-edit"></i>Source</li></router-link>
        <router-link to="/admin/dashboard"><li><i class="el-icon-edit"></i>Dashboard</li></router-link>
        <router-link to="/admin/mdEditor"><li><i class="el-icon-edit"></i>MdEditor</li></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.mainList{
    ul{
        padding: 0;
        margin: 0;
        list-style: none;
        li{
            text-align: left;
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid #505050;
            text-indent: 20px;
            font-size: 20px;
            a{
                text-decoration: none;
            }
        }
    }
}
</style>
