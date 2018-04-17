<template>
    <div class="menuLeft">
        <Menu :active-name="this.$route.name" theme="dark" width="auto" class="menu-item collapsed-menu" @on-select="changeMenu">
            <template v-for="(item, index) in menuList">
                <MenuItem v-if="item.children.length == 1" :name="item.children[0].name" :key="index">
                    <Icon :type="item.children[0].icon"></Icon>
                    <span v-text="item.children[0].title"></span>
                </MenuItem>
            </template>
        </Menu>
    </div>
</template>
<style scoped>
  .ivu-menu-dark {
    background: none;
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item {
    width: 80%;
    margin: 0 auto;
    color: #000;
    background: #fff;
    margin-top: 10px;
    border-radius: 7px;
    padding: 10px 40px;
    font-size: 17px;
    font-weight: bold;
    /* box-shadow: 2px 2px 0px #888888; */
    box-shadow:0px -5px 5px #999 inset;
  }
  .ivu-menu-item>i {
    font-size: 24px;
    margin-right: 14px;
    vertical-align: bottom;
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active {
    color: #2abbae;
    border-right: none;
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):hover {
    background: #fff;
  }
</style>
<script>
  export default {
    props: ["menuList"],
    mounted(){
    },
    methods:{
      changeMenu(name){
        this.$router.push({
          name: name
        })
      }
    }
  }
</script>