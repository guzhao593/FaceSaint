<template>
  <header>
    <aside>
      <i 
        v-if="showGoBack"
        class="iconfont icon-fanhui"
        @click="$router.go(-1)"
      ></i>
      <span>{{title}}</span>
    </aside>
    <section>
      <i class="iconfont icon-sousuo"></i>
    </section>
  </header>
</template>
<script>
export default {
  name: 'FHeader',
  props: {
    title: {
      type: String,
      default: '首页'
    },
    showGoBack: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @import 'style/var.scss';
  header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    @include fj;
    line-height: .6rem;
    height: .6rem;
    background: $main-color;
    aside{
      font-size: .213333rem;
      text-indent: .266667rem;
      color: #fff;
      i{
        font-size: .186667rem;
        margin-right: .133333rem;
      }
    }
    section{
      margin-right: .266667rem;
      .iconfont{
        color: #fff;
      }
    }
  }
</style>
