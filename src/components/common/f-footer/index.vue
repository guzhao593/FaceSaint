<template>
  <footer>
    <div 
      v-for="(item, key) of menu" 
      :key="key" 
      @click="handlerClick(item, key)"
      :class="{select: key === selectKey}"
    >
      <i class="iconfont" :class="item.icon"></i>
      <span>{{item.name}}</span>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FFooter',
  data () {
    return {
      menu: [
        {
          name: '首页',
          icon: 'icon-shouye1',
          path: '/'
        },
        {
          name: '发现',
          icon: 'icon-faxian1',
          path: '/find'
        },
        {
          name: '我的',
          icon: 'icon-wode_zhishi',
          path: '/my'
        }
      ],
      selectKey: 0
    }
  },
  methods: {
    handlerClick ({path}, key) {
      this.$router.push(path)
      this.selectKey = key
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'style/var.scss';
  footer{
    height: .6rem;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    div{
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      i{
        font-size: .25rem;
      }
      span{
        font-size: .140625rem;
      }
    }
    .select{
      color: $font-color;
    }
  }
</style>
