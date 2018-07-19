<template>
  <nav>
    <div
      v-for="(item, key) of classify"
      :key="key"
      @click="handleClick(item.name, key)"
    >
      <svg class="icon" aria-hidden="true" v-if="active === key">
        <use :xlink:href="`#${item.svg}`"></use>
      </svg>
      <i class="iconfont" :class="item.icon" v-else></i>
      <span :style="{color: active === key ? item.fontColor : '#333'}">{{item.name}}</span>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'FMenu',
  data () {
    return {
      classify: [
        {
          name: 'html',
          icon: 'icon-html',
          svg: 'icon-HTML1',
          fontColor: '#EC6630'
        },
        {
          name: 'css',
          icon: 'icon-CSS',
          svg: 'icon-CSS',
          fontColor: '#00A0E9'
        },
        {
          name: 'js',
          icon: 'icon-JS',
          svg: 'icon-JS',
          fontColor: '#FAC552'
        },
        {
          name: 'vue',
          icon: 'icon-vuejs1',
          svg: 'icon-vuejs',
          fontColor: '#41B883'
        },
        {
          name: 'webpack',
          icon: 'icon-webpack',
          svg: 'icon-webpack2',
          fontColor: '#8DD6F9'
        },
        {
          name: 'nodejs',
          icon: 'icon-nodejs',
          svg: 'icon-nodejs',
          fontColor: '#2CD609'
        },
        {
          name: 'git',
          icon: 'icon-git',
          svg: 'icon-git',
          fontColor: '#e16531'
        }
      ],
      active: 0
    }
  },
  methods: {
    handleClick (name, key) {
      this.active = key
    }
  }
}
</script>
<style lang="scss" scoped>
  @import 'style/var.scss';
  nav{
    position: fixed;
    top: .6rem;
    left: 0;
    width: 100vw;
    @include fj(row, flex-start);
    height: .8rem;
    padding: 0 .2rem;
    box-sizing: border-box;
    overflow-x: auto;
    /* 设置滚动条的样式 */
    &::-webkit-scrollbar {
        width: 0px;
        height: 0px
    }
    &::-webkit-scrollbar-button {
        display: none
    }
    div{
      flex-shrink: 0;
      width: .8rem;
      @include fj(column, center);
      text-align: center;
      .icon, .iconfont{
        align-self: center;
        font-size: .266667rem;
      }
      span{
        font-size: .16rem;
      }
    }
  }
  
</style>
